import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { getFilterDate, toFixed } from '../../../util/helpper';
import { BoxCustomDate, BoxCustomType, BoxFilter } from '../criteria/Criteria';
import { useNavigate } from 'react-router';
import { BoxError, BoxLoading, BoxSuccess } from '../criteria/BoxAlert';
import { getShopeeList } from '../../../util/shopee';
import { Search } from "react-feather"

const customStyles = {
    headCells: {
        style: {
          justifyContent: "center",
          textAlign: "center",
          background: '#D9D9D9'
        },
    },
};

const types = [
    // { id: 'All', name: 'สินค้าทั้งหมด' },
    // { id: 'Extra Com', name: 'ค่าคอมทั้งหมด' },
    { id: 'Top Sales', name: 'สินค้าขายดี' },
]

const TiktokResult = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [keyword, setKeyword] = useState('');

    const [criteria, setCriteria] = useState({
        customType: '',
        keyword: '',
        startDate: '',
        endDate: '',
        type: 'Top Sales',
    })


    function mappingData(data){
        const list = [];
    
        data.forEach((m, i) => {
            list.push({
                no: i + 1,
                productsku: m?.productsku || '',
                imageurl: !m?.imageurl ? '' : (
                    <div style={{ padding: '10px 0px' }}>
                        <img src={m?.imageurl} alt={m?.imageurl} style={{ height: 'auto', width: '100%' }} />
                    </div>
                ),
                productname: m?.title || '',
                shopname: m?.shopname || '',

                price: m?.price || 0,
                priceDisplay: toFixed(m?.price || 0),

                totalsold: m?.totalsold || 0,
                totalsoldDisplay: toFixed(m?.totalsold || 0),
                
                comissionpercent: m?.comissionpercent || 0,
                comissionpercentDisplay: `${toFixed(m?.comissionpercent || 0)}%`,

                comissionvalue: m?.comissionvalue || 0,
                comissionvalueDisplay: `฿${toFixed(m?.comissionvalue || 0, 2)}`,

                discountpercent: m?.discountpercent || 0,
                discountpercentDisplay: !m?.discountpercent ? '' : `${toFixed(m?.discountpercent || 0)}%`,
                
                productlink: !m?.productlink ? '' : <a target='_blank' href={`${m?.productlink || ''}`}>{m?.productlink || ''}</a>,
                affiliatelink: !m?.affiliatelink ? '' : <a target='_blank' href={`${m?.affiliatelink || ''}`}>{m?.affiliatelink || ''}</a>,
                comissionlink: !m?.comissionlink ? '' : <a target='_blank' href={`${m?.comissionlink || ''}`}>{m?.comissionlink || ''}</a>,
                
              
            });
        })
        
        return list;
    }

    const fetch = async (_criteria) => { 
        setLoading(true);
        const filterDate = getFilterDate(_criteria);

        const formValue = {
            page: 1,
            itemperpage: 1000,
            searchtext: _criteria?.keyword || '',
            searchdatebegin: filterDate?.startDate || '',
            searchdateend: filterDate?.endDate || '',
            searchtype: _criteria?.type || '',
        }

        const res = await getShopeeList({ ...formValue });
        setData(mappingData(res?.list || []));
        setLoading(false);
    }

    // useEffect(() => {
    //     fetch(criteria);
    // }, [criteria])

    const onChangeCriteria = (name, value) => {
        if (name === 'startDate' || name === 'endDate') {
            setCriteria({
                ...criteria,
                [name]: value,
                customType: ''
            })
        } else if (name === 'customType') {
            setCriteria({
                ...criteria,
                [name]: criteria[name] === value ? '' : value,
            })
        } else {
            setCriteria({
                ...criteria,
                [name]: value
            })
        }
    }

    const onClearDate = () => {
        setCriteria({
            ...criteria,
            startDate: '',
            endDate: ''
        })
    }

    const onChangeKeyword = (value) => {
        setKeyword(value);
    }

    const onClickSearch = () => {
        onChangeCriteria('keyword', keyword);
    }

    return (
        <Fragment>
            <BoxLoading open={loading} setOpen={setLoading} />
            <BoxError open={error} setOpen={setError} />
            <BoxSuccess open={success} setOpen={() => setSuccess(false)} />

            <Container fluid={true} style={{ paddingTop: '20px' }}>
                <Row style={{ marginBottom: '20px' }}>
                    <Col lg="12">
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: 350 }}>
                                <input 
                                    className="form-control"
                                    type="text"
                                    placeholder="ชื่อสินค้า"
                                    value={keyword}
                                    onChange={(e) => onChangeKeyword(e.target.value)} 
                                    style={{ 
                                        width: 350,
                                        padding: '15px 20px',
                                        border: '1px solid #9D9D9D',
                                        borderRadius: '10px 0px 0px 10px'
                                    }}
                                />
                            </div>
                            <div style={{ 
                                background: 'black',
                                border: '1px solid black',
                                width: '100px',
                                borderRadius: '0px 10px 10px 0px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                                onClick={() => onClickSearch()}
                            >
                                <Search className='search-icon' style={{ color: 'white' }} />
                                <span style={{ marginLeft: '7px' }}>ค้นหา</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col lg="12">
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                            {types.map((m) => (
                               <BoxFilter 
                                    text={m.name}
                                    isActive={criteria.type === m.id}
                                    onChange={() => onChangeCriteria('type', m.id)}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col lg="12" style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <BoxCustomDate 
                                startDate={criteria.startDate}
                                endDate={criteria.endDate}
                                onChange={onChangeCriteria}
                                onClear={onClearDate}
                            />
                            <BoxCustomType 
                                value={criteria.customType}
                                onChange={onChangeCriteria}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <div className="table-responsive support-table">
                            <DataTable
                                columns={columns}
                                data={data}
                                striped={true}
                                center={true}
                                pagination
                                customStyles={customStyles} 
                                noDataComponent={
                                    <div style={{ padding: '10px', fontSize: '16px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        ไม่มีข้อมูลแสดงในขณะนี้
                                    </div>
                                }
                                persistTableHead
                                paginationPerPage={50}
                                paginationRowsPerPageOptions={[10, 50, 100]} 
                                fixedHeader
                                // fixedHeaderScrollHeight="500px"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default TiktokResult;

const columns = [
    {
        name: "ลำดับ",
        selector: (row) => row["no"],
        sortable: true,
        center: true,
        maxWidth: "100px",
        minWidth: "100px",
    },
     {
        name: "รหัสสินค้า",
        selector: (row) => row["productsku"],
        sortable: true,
        center: false,
        maxWidth: "180px",
        minWidth: "180px",
    },
    {
        name: "รูปภาพสินค้า",
        selector: (row) => row["imageurl"],
        sortable: false,
        center: false,
        minWidth: "150px",
        maxWidth: "150px",
    },
    {
        name: "ชื่อสินค้า",
        selector: (row) => row["productname"],
        sortable: true,
        center: false,
        minWidth: "500px",
        maxWidth: "500px",
        wrap: true,
        style: {
            whiteSpace: "normal",
            wordBreak: "break-word",
        },
    },
    {
        name: "ราคา",
        selector: (row) => row["priceDisplay"],
        sortable: true,
        center: true,
        maxWidth: "160px",
        minWidth: "160px",
        sortFunction: (a, b) => a.price - b.price,
    },
    {
        name: "ขาย",
        selector: (row) => row["totalsoldDisplay"],
        sortable: true,
        center: true,
        maxWidth: "160px",
        minWidth: "160px",
        sortFunction: (a, b) => a.totalsold - b.totalsold,
    },
    {
        name: "ชื่อร้าน",
        selector: (row) => row["shopname"],
        sortable: true,
        center: false,
        minWidth: "300px",
        maxWidth: "300px",
        wrap: true,
        style: {
            whiteSpace: "normal",
            wordBreak: "break-word",
        },
    },
    {
        name: "อัตราค่าคอมมิชชัน",
        selector: (row) => row["comissionpercentDisplay"],
        sortable: true,
        center: true,
        maxWidth: "160px",
        minWidth: "160px",
        sortFunction: (a, b) => a.comissionpercent - b.comissionpercent,
    },
    {
        name: "คอมมิชชัน (THB)",
        selector: (row) => row["comissionvalueDisplay"],
        sortable: true,
        center: true,
        maxWidth: "160px",
        minWidth: "160px",
        sortFunction: (a, b) => a.comissionvalue - b.comissionvalue,
    },
     {
        name: "ส่วนลด",
        selector: (row) => row["discountpercentDisplay"],
        sortable: true,
        center: true,
        maxWidth: "160px",
        minWidth: "160px",
        sortFunction: (a, b) => a.discountpercent - b.discountpercent,
    },
    {
        name: "ลิงก์สินค้า",
        selector: (row) => row["productlink"],
        sortable: true,
        center: false,
        minWidth: "400px",
        maxWidth: "400px",
    },
    {
        name: "ลิงก์ข้อเสนอ",
        selector: (row) => row["affiliatelink"],
        sortable: true,
        center: false,
        minWidth: "300px",
        maxWidth: "300px",
    },
     {
        name: "URL Comission",
        selector: (row) => row["comissionlink"],
        sortable: true,
        center: false,
        minWidth: "300px",
        maxWidth: "400px",
    },
]