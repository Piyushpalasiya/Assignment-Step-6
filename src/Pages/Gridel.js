import React ,{useState,useEffect} from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Grid, Button } from '@material-ui/core'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import FormDialog from './Dialog';
import './Gridel.css'


const initialValue = { name: "", email: "", phone: "", dob: "" }
function Gridel() {
   const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(true);
  const [formData, setFormData] = useState(initialValue)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };

const url = "http://localhost:4000/users"
  const columnDefs = [
    { headerName: "ID", field: "id" , checkboxSelection:true,headerCheckboxSelection:true },
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email", },
    { headerName: "Phone", field: "phone" },
    { headerName: "Age", field: "age" },
    { headerName: "Date-of Birth", field: "dob" },
    {
      headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
        <Button variant="outlined" color="primary" onClick={() => handleEdit(params.data)}>Edit</Button>
        <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.value)}>Delete</Button>
      </div>
    }
  ]
// calling getUsers function for first time
  useEffect(() => {
    getUsers()
  }, [])

   //fetching user data from server
  const getUsers =()=>{
  fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }

  const onChange = (e) => {
     const { value, id } = e.target
    //  console.log(value,id)
     setFormData({ ...formData, [id]: value })
  }
  
  const onGridReady = (params) => {
      setGridApi(params)
      // gridApi=params.api
   
  // const onExportClick = () =>{
  //   gridApi.exportDataAsCsv();
   }

  // setting Edit row data to form data and opening pop up window
  const handleEdit = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }
  //deleting a user
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete this row", id)
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getUsers())

    }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user 
      const confirm = window.confirm("Are you sure, you want to Edit this row ?")
      confirm && fetch(url + `/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()

        })
    } else {
      // adding new user
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    }
  }

  const defaultColDef = {
    sortable: true,
    editable:true,
    flex: 1, filter: true,
    floatingFilter: true
  }

  return (

    <div className="App">
      
        
    <h1 align="center">User Information</h1>
    <h3 align = "center">CRUD Operation with Json-server in ag-Grid</h3>
    <Grid align="right">
      <Button variant="contained" color="primary" onClick={handleClickOpen} >Add user</Button>
      {/* <Button onClick={()=>onExportClick()}>Export</Button> */}
    </Grid>
    <div className="ag-theme-alpine" style={{ height: '400px' }}>
      <AgGridReact
        rowData={tableData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
        pagination={true}
        paginationPageSize={6}
        // rowSelection={rowSelectionType}
        //   onSelectionChanged={onSelectionChanged}
        //   rowMultiSelectWithClick={true}
        //   isRowSelectable={isRowSelectable}
      />
    </div>

    <FormDialog open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}/>
    </div>
   
  )
}

export default Gridel
