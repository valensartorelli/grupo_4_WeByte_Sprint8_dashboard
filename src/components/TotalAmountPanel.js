import React from 'react';


function TotalAmountPanel (props){
    return(
     <div className="col-md-3 mb-4 ">
              <div className= {`card border-left-${props.color} shadow h-100 gris` } style={{ width: '100%' }}>   
                <div className="card-body bg-gray-thunder rounded-right">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className={`text-xs font-weight-bold text-uppercase mb-1`}> { props.title }</div>
                      <div className="h5 mb-0 font-weight-bold"> { props.value } </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}




export default TotalAmountPanel;