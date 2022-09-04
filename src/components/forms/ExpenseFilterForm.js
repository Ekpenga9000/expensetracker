import React, {useState} from "react";
import { Merchants } from "../data/Merchants";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseFilterForm = ({onStatusFilter,onMerchantFilter, onDateFilter}) => {
    const [filters, setFilters] = useState({
        from: "",
        to: "",
        minval: "",
        maxval: "",
        Merchants: "",
        status:"",
    });
   
    const handleInput = (field) => (event) => { 
        const {value} = event.target;
        
        setFilters({
            ...filters, [field]:value,
        });

        switch (field) {
            
            case "from":
                onDateFilter(value, "from");
                break;
            case "to":
                break;
            default:
                break;
        
            case "Merchants":
                onMerchantFilter(value);
                break;
            case "status":
                onStatusFilter(value);
                break;
        };
    };

    return (
        <form>
        <div className="mb-3">
            <label htmlFor="startDate"className="bold dashboard-label form-label">From</label>
                <input
                    type="date"
                    className="dashboard-input"
                    id="startDate"
                    onChange={handleInput("from")}/>
        </div>
        <div className="mb-3">
            <label htmlFor="endDate" className="bold dashboard-label form-label">To</label>
                <input
                    type="date"
                    className="dashboard-input"
                    id="endDate"
                    onChange={handleInput("to")}/>
        </div>
        <div className="d-flex justify-content-around">
            <div>
                <label htmlFor="minVal" className="bold dashboard-label form-label">Min</label>
                    <input
                        type="number"
                        className="dashboard-input"
                        id="minVal"
                        />
            </div>

            <div className="pt-4 mx-2"><p>-</p></div>
               
            <div>
                <label htmlFor="maxVal" className="bold dashboard-label form-label">Max</label>
                    <input
                        type="number"
                        className="dashboard-input"
                        id="maxVal"
                        />
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label bold">Merchant</label>
            <select className="form-select">
                <option value=''></option>
                {Merchants.map((Merchants) => {
                    return (<option value={Merchants} key={Merchants}>{Merchants}</option>)
                })};
            </select>
        </div>
        <div className="mb-3">
            <label className="form-label bold text-secondary dashboard-label">Status</label>
                <div className="d-flex">
                    <div className="form-check me-3">
                        <input className="form-check-input" type="checkbox" id="formCheckNew"/>
                        <label className="form-check-label" htmlFor="formCheckNew">
                            New
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="formCheckProgress"/>
                        <label className="form-check-label" htmlFor="formCheckProgress">
                        In Progress
                        </label>
                    </div>
            
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="formCheckReimbursed"/>
                    <label className="form-check-label" htmlFor="formCheckReimbursed">
                        Reimbursed
                    </label>
                </div>   
        </div>
            
    </form>
    )
}

export default ExpenseFilterForm