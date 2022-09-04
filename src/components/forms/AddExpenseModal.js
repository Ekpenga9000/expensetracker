import React,{useState} from 'react'
import { Merchants } from "../data/Merchants";
import { useDropzone } from "react-dropzone"
import { BsUpload } from "react-icons/bs"

function AddExpenseModal({closeModal}) {
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
                <img src={file.preview} style={{width:"200px"}} alt="preview"/>
            </div>
        </div>
    ));
  return (
      <div className='modalBackground p-3 shadow-sm' id='mainModalContainer'>
          <div className='modalContainer'>
              <div className="title"></div>
              <form>
        
                <div className="body d-lg-flex justify-content-center">
                  <div className='me-lg-3'>
                      <h2 className='mb-3'>Add Expense</h2>
                      
                      <div className="mb-3">
                            <label className="form-label bold">Merchant</label>
                            <select className="form-select">
                                <option value=''></option>
                                {Merchants.map((Merchants) => {
                                    return (<option value={Merchants}>{Merchants}</option>)
                                })};
                            </select>
                          </div>
                            <div className="mb-3">
                                <label className="form-label bold" for="addInputforAmount">Total</label>
                                <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input type="text" className="form-control dashboard-input" id="addInputforAmount"/>
                                </div>
                          </div>
                          <div className="mb-3">
                                <label for="addExpenseDate"className="bold dashboard-label form-label">Date</label>
                                <input type="date" className="dashboard-input" id="addExpenseDate"/>
                          </div>
                          <div className="mb-3">
                              <div>
                                  <label className="form-label bold" for="addNewComment">Comment</label>
                                </div>  
                                <textarea className="form-control dashboard-input" id="addNewComment"></textarea>
                          </div>
                      </div>
                    <div id='DragAndDropPictureModal' className='p-3'>
                        <div {...getRootProps()}> 
                            <input {...getInputProps()} />
                            <button type='button' className="btn btn-light text-primary d-inline-block me-3 bold">Select Receipt</button><span className='text-secondary d-inline-block'><BsUpload className='text-secondary'/> Drop receipt here...</span>
                        </div>
                          <div>{images}</div>
                    </div>      
                  </div>
                  <div className='d-flex justify-content-between mt-sm-3'>
                        <div>
                            <button className="btn btn-primary bold d-inline-block me-3">Save</button>
                            <button type="button" className="btn btn-light text-primary bold d-inline-block" onClick={() => closeModal(false)}>Cancel</button>
                        </div>
                        <div>
                                <button type="button" className="btn btn-link text-danger bold"
                                onClick={()=> closeModal(false)}>Delete</button>
                        </div>
                    </div>
                </form>
              <div className="footer"></div>
          </div>
    </div>
  )
}

export default AddExpenseModal