import React, { useState } from "react";
import dayjs from "dayjs";
import { BsFillPlusCircleFill, BsFillPersonPlusFill } from "react-icons/bs";
import { Accordion } from "react-bootstrap";
import tableData from "./data/MOCK_DATA";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseFilterForm from "./forms/ExpenseFilterForm";
import AddExpenseModal from "./forms/AddExpenseModal";


let amount = "$ 4,000,000";
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function Dashboard() {
    // this is the variable to that spools the table data
    const [items, setitems] = useState(tableData);
    
    // this is the variable to open the modal box that adds expenses
    const [openModal, setOpenModal] = useState(false);

    // this function is to handle the filter option
    const [allData, setData] = useState(tableData);

    const handleFilterDate = (Date, field) => {
        const filteredData = tableData.filter((item) => {
            if (field === "from" && dayjs(item.Date).isSameOrAfter(dayjs(Date))) {
                return item;
            } 
        });
        setData(filteredData);

    };

    const handleFilterMerchants = (Merchant) => {
        const filteredData = tableData.filter((item) => {
            if (item.Merchant === Merchant) {
                return item;
            }
        });
        
        setData(filteredData);
    };
        const handleFilterStatus = (Status) => {
            const filteredData = tableData.filter((item) => {
                if (item.Status === Status) {
                    return item;
                  }
            });

            setData(filteredData);
        };
        
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
                                <a href="/addemployee" className="btn dashboard-nav-button d-inline-block me-3"><BsFillPersonPlusFill/> Employee</a>
                                <a href="/" className="btn dashboard-nav-button d-inline-block">LOGOUT</a>
                            </div>
                        </div>
                    </div>

                    {/* The row for the dashboard */}
                    <div className="row">
                        <div className="col">
                            {/* This div will no display until the screen is a small screen */}
                            <div className="d-block d-md-block d-lg-none">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div>
                                                <div>
                                                    <div><p>To be reimbursed</p></div>
                                                    <div id="accordionTitleAmount">{amount}</div>
                                                </div>
                                            </div>
                                        </Accordion.Header>
                                    <Accordion.Body>
                                        <ExpenseFilterForm/>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* This is the part that contains the forms and the tables */}
                            <div className="col d-lg-flex">
                                <div className="col-2 d-none d-lg-block bg-light postion-sticky">
                                    <div className="col d-flex px-2 ruler-div justify-content-between">
                                        <p className="text-muted">
                                            Filter Expenses
                                        </p>

                                        <button href="#" className="d-block bold" id="clear-filter-button">Clear Filters</button>
                                    </div>
                                    <div className="px-3"><hr/></div>
                                    <div className="px-3">
                                        <ExpenseFilterForm
                                            onDateFilter={handleFilterDate}
                                            onMerchantFilter={handleFilterMerchants}
                                
                                            onStatusFilter={handleFilterStatus}
                                        />
                                    </div>
                                </div>
                                {/* The div for the table */}
                                <div className="col-lg-8 col-md-12 col-sm-12 shadow" >
                                {openModal && <AddExpenseModal closeModal={setOpenModal}/>}
                                <div className="height100 tableContainer" id="tableContainer">
                                        <table className="dashboard-table">
                                        <thead>
                                            <tr className="stickyposition-top">
                                                <th className="stickyposition-top stickyposition-left">Date</th>
                                                <th>Merchant</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th>Comment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {items.map(tableDataObj => (
                                                <tr key={tableDataObj.id}><td className="stickyposition-left">{tableDataObj.Date}</td>     
                                                    <td>{tableDataObj.Merchant}</td>     
                                                    <td>{tableDataObj.Total}</td>     
                                                    <td>{tableDataObj.Status}</td>     
                                                    <td>{tableDataObj.Comment}</td></tr>
                                            ))};  
                                            
                                        </tbody>
                                        </table>
                                </div>
                                    <div id="dashboard-sticky-body-container"><button className="addExpenseModalButton" id="add_ExpenseModal_Button" onClick={()=>{setOpenModal(true)}}><BsFillPlusCircleFill /></button></div>
                    
                                </div>

                                {/* The div that for the amount. */}
                                <div className="col-2 position-sticky d-none d-lg-block bg-light">
                                    <div className="col d-flex align-items-end px-3 ruler-div">
                                        <p className="text-muted">
                                            To be reimbursed
                                        </p>   
                                    </div>
                                    <div className="px-3"><hr/></div>
                                    
                                    <div className="d-flex justify-content-center pt-4">
                                        <h1>{amount}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
  
}

export default Dashboard