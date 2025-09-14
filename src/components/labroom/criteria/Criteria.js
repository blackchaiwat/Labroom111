import { Calendar, Search } from "react-feather"
import { Button, ButtonGroup, Col, Input, Popover, PopoverBody, } from "reactstrap"
import DatePicker from "react-datepicker";
import { useState } from "react";
import moment from "moment";
import { toFixed } from "../../../util/helpper";

export const BoxFilter = ({ text = '', isActive = false, onChange, isView = false }) => {
    if (isView) {
        return (
            <div className={`filter-select active`}>
                <p>{text}</p>
            </div>
        ) 
    }
    return (
        <div className={`filter-select ${isActive ? 'active' : ''}`} onClick={() => onChange()}>
            <p>{text}</p>
        </div>
    )
}

export const BoxSearch = ({ value, onChange }) => {
    return (
        <div className="job-filter">
            <div className="faq-form">
                <Input 
                    className="form-control"
                    type="text"
                    placeholder="ค้นหา.."
                    style={{ width: 350 }}
                    value={value}
                    onChange={(e) => onChange('keyword', e.target.value)} 
                />
                <Search className="search-icon" />
            </div>
        </div>
    )
}

export const BoxCustomType = ({ value, onChange }) => {
    return (
        <ButtonGroup key={value}>
            <Button color="primary" outline className={`btn-js1 ${value === 'today' ? 'active' : ''}`} onClick={() => onChange('customType', 'today')}>Yesterday</Button>
            <Button color="primary" outline className={`btn-js1 ${value === 'week' ? 'active' : ''}`} onClick={() => onChange('customType', 'week')}>Last 7 Days</Button>
            <Button color="primary" outline className={`btn-js1 ${value === 'month' ? 'active' : ''}`} onClick={() => onChange('customType', 'month')}>Last 30 Days</Button>
        </ButtonGroup> 
    )
}

export const BoxCustomDate = ({ startDate, endDate, onChange, onClear }) => {
    const [popover, setPopover] = useState(false);
    const OffsetToggle = () => { setPopover(!popover); };

    const [popover2, setPopover2] = useState(false);
    const OffsetToggle2 = () => { setPopover2(!popover2); };

    return (
         <ButtonGroup className="pull-right">
            <Button color="primary" outline className="btn-js1" id="Popover-StartDate">{startDate ? moment(startDate).format('DD/MM/yyyy') : 'วันที่เริ่มต้น'}</Button>
            <Popover placement="bottom" isOpen={popover} target="Popover-StartDate" toggle={OffsetToggle} trigger="hover">
                <PopoverBody>
                    <DatePicker className="form-control digits"
                        selected={startDate}
                        onChange={(date) => onChange('startDate', date)}
                        inline
                    />
                </PopoverBody>
            </Popover>
            <Button color="primary" outline className="btn-js1" id="Popover-EndDate">{endDate ? moment(endDate).format('DD/MM/yyyy') : 'วันที่สิ้นสุด'}</Button>
            <Popover placement="bottom" isOpen={popover2} target="Popover-EndDate" toggle={OffsetToggle2} trigger="hover">
                <PopoverBody>
                    <DatePicker className="form-control digits"
                        selected={endDate}
                        onChange={(date) => onChange('endDate', date)}
                        inline
                    />
                </PopoverBody>
            </Popover>
            <Button color="primary" outline className="btn-js1 active" onClick={() => onClear()}><Calendar size={18} /></Button>
        </ButtonGroup>
    )
}


export const BoxCount = ({ text = '', value = '' }) => {
    let count = '';

    if (value < 1000) {
        count = toFixed(value);
    } else if (value < 1000000) {
        count = `${toFixed(value/1000, 1)} K`;
    } else  {
        count = `${toFixed(value/1000000, 1)} M`;
    }     

    return (
        <div className='text-center'>
            <h5 style={{ margin: 0 }}><strong>{count}</strong></h5>
            <p>{text}</p>
        </div>
    )
}


export const BoxInfo = ({ text = '', value = '' }) => {
    return (
        <Col xs='12'>
            <div style={{ borderBottom: '1px solid #E3E3E3', padding: '20px 0px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <p style={{ fontSize: 14, margin: 0 }}>{text}</p>
                <p style={{ fontSize: 14, margin: 0 }}>{value}</p>
            </div>
        </Col>
       
    )
}