import React, { useState } from 'react';
import { useDropzone } from "react-dropzone";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { DepartmentData } from '../data/DepartmentData';
import { Location } from '../data/Location';

const AddEmployee = () => {
    const [dept, setDept] = useState(DepartmentData)
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    });

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{height:"20em",width:"20em",borderRadius:"50%",padding:"3em"}} alt="preview"/>
            </div>
        </div>
    ));
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                            {/* The navigation bar with the buttons */}
                            <div className="col d-flex justify-content-between p-3 dashboard-nav-bar dark-blue-bg">
                                <div className="col">
                                    <h3 className="text-white">Expense Manager</h3>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <a href="/dashboard" className="btn dashboard-nav-button d-inline-block me-3"><AiOutlineDashboard/> Dashboard</a>
                                    <a href="/" className="btn dashboard-nav-button d-inline-block">LOGOUT</a>
                                </div>
                        </div>
                </div>

                {/* The container for the form */}

                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center height100">
                        <div className="col-lg-6 col-12 p-4 rounded shadow-sm bg-light">
                            <form>
                                <div id='DragAndDropProfilePicture' className='rounded mb-3 d-lg-flex'>
                                    <div className='bg-info me-lg-3'>{images}</div>
                                    <div {...getRootProps()} className="d-flex align-items-center"> 
                                        <input {...getInputProps()} />
                                        <button type='button' className="btn btn-light text-primary d-inline-block me-3 bold">Select Image</button><span className='text-secondary d-inline-block'><BsUpload className='text-secondary'/> Drop profile picture here...</span>
                                    </div>
                                    
                                </div>
                                <div className='mb-3'>
                                    <div><label for="firstname" className='form-label bold'>First name</label></div>
                                    <div><input type="text" name="firstname" className='form-control' id='firstname'/></div>
                                </div>
                                <div className='mb-3'>
                                    <div><label for="lastname" className='form-label bold'>Last name</label></div>
                                    <div><input type="text" name="lastname" className='form-control' id='lastname'/></div>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="male" id="male"/>
                                    <label className="form-check-label" for="male">
                                        Male
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="female" id="female"/>
                                    <label className="form-check-label" for="female">
                                        Female
                                    </label>
                                    </div>
                                <div className="mb-3">
                                    <label className="form-label bold">Deparment</label>
                                    <select className="form-select">
                                        <option value=''></option>
                                        {dept.map((DepartmentDataobj) => {
                                            return (<option value={DepartmentDataobj.department} key={DepartmentDataobj.id}>{DepartmentDataobj.department}</option>)
                                        })};
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label bold">Location</label>
                                    <select className="form-select">
                                        <option value=''></option>
                                        {Location.map((Location) => {
                                            return (<option value={Location} key={Location}>{Location}</option>)
                                        })};
                                    </select>
                                </div>
                                <div className="mb-3">
                              <div>
                                  <label className="form-label bold" for="addNewComment">Job Description</label>
                                </div>  
                                <textarea class="form-control" id="addNewComment"></textarea>
                                </div>
                                <div className='mb-3'>
                                    
                                        <button className="btn btn-primary bold d-inline-block me-3">Submit</button>
       
                                </div>
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AddEmployee