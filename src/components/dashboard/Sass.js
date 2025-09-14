import React, { Fragment } from 'react'
import BreadCrumb from '../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Table } from 'reactstrap'
import { sassTopCard, progressData, newuser } from './data'
import ApexChart from 'react-apexcharts'
import { sassUserChart, sassSmallChartData } from './chartsData/chartist'
import { apexRadialChart, areaSpaline } from './chartsData/apexChart'
import handshake from '../../assets/images/dashboard-sass/handshake.png'
import graph from '../../assets/images/dashboard-sass/graph.png'
import { New, OverView, TotalProfit, TotalDeals, UsersChart, MonthlyRevenueProgress, HighestValue, OurGrowth, TodayEarning } from "../../constant";

const Sass = () => {
  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Dashboard" title="Sass" />
      <Container fluid={true}>
        <Row className="sass-top-cards">
          {sassTopCard.map(data => (
            <Col key={data.id}>
              <Card className="sass-widgets o-hidden">
                <CardBody className="p-0">
                  <div className="media d-flex">
                    <div className="media-body flex-grow-1">
                      <p className="f-w-600">{data.title}</p>
                      <h2 className="f-w-600 mb-0">{data.total}</h2>
                    </div>
                    <div className="setting-dot d-inline-block">
                      <div className={`setting-bg setting-bg-${data.class}`}><i className={`fa fa-spin fa-cog font-${data.class}`}></i></div>
                    </div>
                  </div>
                  <div className={`bg-gradient-${data.class} footer-shape`}>
                    <div className="sass-footer">
                      <p className="mb-0 d-inline-block me-3">{data.monthly}</p><span><span className="d-inline-block"><i className="fa fa-sort-up me-4"></i></span></span>
                      <p className={`mb-0 d-inline-block b-l-${data.class} ps-4 me-3`}>{data.weekly}</p><span className="down-arrow-align"><span className="d-inline-block"><i className="fa fa-sort-down"></i></span></span>
                      <div className="small-sass">
                        <ApexChart options={sassSmallChartData.options} series={sassSmallChartData.series} type='bar' width={60} height={45} />
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
          <Col xl="4" className="xl-100 box-col-6">
            <Card>
              <CardHeader>
                <h5>{OverView}</h5>
              </CardHeader>
              <CardBody className="overview-sass">
                <Row>
                  <Col sm="6">
                    <div className="card overview-color">
                      <div className="card-body bg-gradient-danger text-center">
                        <h4>{"30+"}</h4>
                        <div className="btn btn-pill btn-sm f-12">{TotalDeals}</div><img className="img-fluid img-80" src={handshake} alt="" />
                      </div>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="card overview-color">
                      <div className="card-body bg-gradient-primary text-center">
                        <h4>{"$1800"}</h4>
                        <div className="btn btn-pill btn-sm f-12">{TodayEarning}</div><img className="img-fluid img-60" src={graph} alt="" />
                      </div>
                    </div>
                  </Col>
                  <Col sm="12">
                    <div className="progress-sass">
                      {progressData.map(data => (
                        <div className="sass-overview" key={data.id}><span className="f-w-600">{data.title} : {data.value}%</span><span className="pull-right f-w-600">{data.value} / <span className="over-color">{"100"}</span></span>
                          <div className="progress-gradient-fill">
                            <div className="progress sm-progress-bar progress-animate">
                              <div className="progress-gradient-danger" role="progressbar" style={{ 'width': data.value + '%' }}><span className="animate-circle"></span></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" className="xl-50 box-col-6">
            <Card className="o-hidden">
              <CardHeader>
                <h5>{New}</h5>
              </CardHeader>
              <CardBody className="p-0">
                <div className="sales-product-table crypto-table-market sass-table table-responsive">
                  <Table borderless>
                    <tbody>
                      {newuser.map(data => (
                        <tr key={data.id}>
                          <td>
                            <div className="media d-flex"><img className="img-fluid rounded-circle img-40 me-3" src={data.imagepath} alt="" />
                              <div className="media-body"><span className="f-w-600 d-block">{data.title}</span><small className="f-w-600">{"1"}<sup>{"st"}</sup> {"Year"}</small></div>
                            </div>
                          </td>
                          <td className="text-center"><span className="f-w-600 d-block">{data.rank}</span><small className="f-w-600">{"Rank"}</small></td>
                          <td><img className="img-fluid" src={data.graphimg} alt="" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" className="xl-50 box-col-6">
            <Card>
              <CardHeader className="crypto-header">
                <h5>{TotalProfit}</h5>
                <div className="chart-value-box pull-right">
                  <span className="f-12 f-w-600">
                    <span className="font-primary">{"+7.9%"}
                    </span> {"vs Last 7 Days"}</span>
                </div>
              </CardHeader>
              <CardBody>
                <div className="sass-apex-radial">
                  <div id="radial">
                    <ApexChart options={apexRadialChart.options} series={apexRadialChart.series} height="365" type="radialBar" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12 box-col-6">
            <Card>
              <CardHeader className="crypto-header">
                <h5>{UsersChart}</h5>
                <div className="chart-value-box pull-right">
                  <div className="value-square-box-secondary"></div><span className="f-12 f-w-600">{"Current"}</span>
                  <div className="value-square-box-light ms-3"></div><span className="f-12 f-w-600">{"Highest"}</span>
                </div>
              </CardHeader>
              <CardBody className="card-body">
                <div className="ct-10 chartist-sass-container">
                  <ApexChart options={sassUserChart.options} series={sassUserChart.series} type='bar' width={'100%'} height={'100%'} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader className="card-header crypto-header">
                <h5>{MonthlyRevenueProgress}</h5>
                <div className="chart-value-box pull-right">
                  <div className="value-square-box-success me-2"></div><span className="f-12 f-w-600">{HighestValue}</span>
                </div>
              </CardHeader>
              <CardBody className="chart-block">
                <div className="apex-chart-container">
                  <div id="area-spaline">
                    <ApexChart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" />
                  </div>
                  <div className="our-growth-bottom sass-graph-card">
                    <div className="media">
                      <span className="f-12 f-w-600">{OurGrowth}</span>
                      <span className="pull-right badge rounded-pill ms-3">
                        <span className="font-success">
                          <span className="d-inline-block">
                            <i className="fa fa-sort-up"></i>
                          </span> {"9.4%"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Sass
