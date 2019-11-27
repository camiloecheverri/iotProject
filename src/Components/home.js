import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h3>Proyecto que hace uso de arduino para el control de luminarias dentro del hogar</h3>
                    </div>
                    <div className="col-md-8">
                        <img src="https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/04/11/Recortada/img_abarredo_20190411-121411_imagenes_lv_terceros_istock-520840766-kam-U461587722160KII-992x558@LaVanguardia-Web.jpg"  width= "100%" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
        )
    }
}
