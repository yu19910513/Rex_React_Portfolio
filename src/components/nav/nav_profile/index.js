import React from 'react';

export default function Profile() {
  return (
                  <div className="tab-pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="d-flex row justify-content-center skillCard">
                      <div className="card mb-4 text-center mt-4 shadow-sm col-3 mr-2 ml-2 educationEL">
                        <div className="card-body rounded bg-light educationCard" data-toggle="modal" data-target="#educationModal">
                          <h5 className="card-title">Education</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Colleges</h6>
                          <img className="card-img-bottom rounded" src="https://pbs.twimg.com/profile_images/770765680555601920/UVy9iRnS.jpg" style={{width: '20%'}} alt='' />
                          <img className="card-img-bottom rounded" src="https://pbs.twimg.com/profile_images/1381053633341530117/gy3-uGcg_400x400.jpg" style={{width: '20%'}} alt='' />
                          <div className="modal fade" id="educationModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title text-dark" id="exampleModalLongTitle"><b>Education</b></h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body row justify-content-center">
                                  <div className="list-group">
                                    <a href="https://www.cs.washington.edu/research/plse" className="list-group-item list-group-item-action flex-column align-items-start text-dark educationOption">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">University of Washington</h5>
                                        <small>2021</small>
                                      </div>
                                      <p className="mb-1">Certificate in Web Development/ Software Engineering</p>
                                      <small>Seattle, WA</small>
                                    </a>
                                    <a href="https://pharmacy.wsu.edu/" className="list-group-item list-group-item-action flex-column align-items-start educationOption">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Washington State University</h5>
                                        <small className="text-muted">2017 - 2021</small>
                                      </div>
                                      <p className="mb-1">Doctor of Pharmacy (Pharm.D.)</p>
                                      <small className="text-muted">Spokane, WA</small>
                                    </a>
                                    <a href="https://wsu.edu/" className="list-group-item list-group-item-action flex-column align-items-start educationOption">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Washington State University</h5>
                                        <small className="text-muted">2010 - 2015</small>
                                      </div>
                                      <p className="mb-1">Bachelor of Science in Biochemistry</p>
                                      <small className="text-muted">Pullman, WA</small>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-4 text-center mt-4 shadow-sm col-3 mr-2 ml-2 skillEL">
                        <div className="card-body bg-light skillcard rounded" data-toggle="modal" data-target="#skillModal">
                          <h5 className="card-title">Skills</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Knowledge &amp; Languages</h6>
                          <img className="card-img-bottom rounded" src="https://camo.githubusercontent.com/6eaaae8defc78f268eaf0824350a66a1dfcb6aa77210d3dca069d1d1cefebc53/68747470733a2f2f6769742d73636d2e636f6d2f696d616765732f6c6f676f732f646f776e6c6f6164732f4769742d4c6f676f2d32436f6c6f722e706e67" style={{width: '20%'}} alt='' />
                          <img className="card-img-bottom rounded" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" style={{width: '20%'}} alt='' />
                          <img className="card-img-bottom rounded" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png" style={{width: '10%'}} alt=''/>
                          <div className="modal fade" id="skillModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title text-dark" id="exampleModalLongTitle"><b>Skills</b></h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body row justify-content-center mr-1 ml-1">
                                  <div className="list-group text-left">
                                    <div className="list-group-item list-group-item-action flex-column align-items-start skillOption text-dark">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Technical Skills</h5>
                                        <small />
                                      </div>
                                      <p className="mb-1">JavaScript, HTML5, CSS, JQuery, Bootstrap 4, and Node js.</p>
                                      <small />
                                    </div>
                                    <div className="list-group-item list-group-item-action flex-column align-items-start skillOption text-dark">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Operation Systems</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">MacOS, Window, and Linux</p>
                                      <small className="text-muted" />
                                    </div>
                                    <div className="list-group-item list-group-item-action flex-column align-items-start skillOption text-dark">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Tools</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">Git, Visual Studio Code, and Google</p>
                                      <small className="text-muted" />
                                    </div>
                                    <div className="list-group-item text-dark list-group-item-action flex-column align-items-start skillOption">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Speaking Languages</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">English, Chinese, and Vietnamese</p>
                                      <small className="text-muted" />
                                    </div>
                                    <div className="list-group-item text-dark list-group-item-action flex-column align-items-start skillOption">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Clinical Exp.</h5>
                                        <small className="text-muted" />
                                      </div>
                                      <p className="mb-1">Pharmacy Operation, Healthcare Liaison, and Insurance Systme</p>
                                      <small className="text-muted" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-4 text-center mt-4 shadow-sm col-3 mr-2 ml-2 experienceEL">
                        <div className="card-body bg-light experiencecard rounded" data-toggle="modal" data-target="#experienceModal">
                          <h5 className="card-title">Experience</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Collaboration</h6>
                          <img className="card-img-bottom rounded expIMG" src="https://i.gifer.com/7Gbu.gif" style={{width: '50%'}} />
                          <div className="modal fade" id="experienceModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title text-dark" id="exampleModalLongTitle"><b>Experience</b></h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body row justify-content-center">
                                  <div className="list-group text-left">
                                    <a href="https://github.com/yu19910513/Hiking-Application-Project-Take-A-Hike" className="list-group-item list-group-item-action flex-column align-items-start text-dark expOption mb-1">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Project 2 <span className="text-success small">| Github</span></h5>
                                        <small>July 2021</small>
                                      </div>
                                      <p className="mb-1">Take A Hike - Informational</p>
                                      <small>Team: Chris Abiva, Vinnette Gutierrez, Rex Yu, Matt Koski</small>
                                    </a>
                                    <a href="https://github.com/yu19910513/Project-1" className="list-group-item list-group-item-action flex-column align-items-start text-dark expOption mb-1">
                                      <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Project 1 <span className="text-success small">| Github</span></h5>
                                        <small>May 2021</small>
                                      </div>
                                      <p className="mb-1">Kid's Corner - Educational</p>
                                      <small>Team: Donna Crawford, Gunjan Bhargava, Rex Yu, Sandy Marr</small>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

            );
          }
