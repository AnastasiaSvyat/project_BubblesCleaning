import React from 'react';
// import TotalPriceBox from '../TotalPriceBox/TotalPriceBox.jsx';
import TablePrice from './tablePrice.jsx';

const additionalServices =[
    {
        img:'https://cleansheff.com.ua/template/cleanCheff/upload/products/1.svg',
        info:'Сarpet',
        priceAddServ: 2.4,
        type:'Сarpet',
        amount:'0'
    },
    {
        img:'https://cleansheff.com.ua/template/cleanCheff/upload/products/2.svg',
        info:'Sofa',
        priceAddServ:2.2,
        amount:'0',
        type:'Sofa',
    },
    {
        img:'https://cleansheff.com.ua/template/cleanCheff/upload/products/4.svg',
        info:'Window Washing',
        priceAddServ:'1,8$',
        amount:'0',
        type:'Window',
    },
    {
        img:'https://cleansheff.com.ua/template/cleanCheff/upload/products/6.svg',
        info:'Internal cleaning of the refrigerator',
        priceAddServ:'1,7$',
        amount:'0',
        type:'refrigerator',
    },
    {
        img:'https://cleansheff.com.ua/template/cleanCheff/upload/products/8.svg',
        info:'Disassembly and washing of drawers and shelves',
        priceAddServ:'1,5$',
        amount:'0',
        type:'drawers',
    },
    {
        img:'https://cleansheff.com.ua/template/cleanCheff/upload/products/10.svg',
        info:'Washing Lamps',
        priceAddServ:'1,2$',
        amount:'0',
        type:'Lamps',
    },
]
function AdditionalServices (props){
    return(
        <div>

         <div>
         {
            additionalServices.map((item, index) => 
            
            
            <TablePrice name= {props.name} updateData={props.updateData}  amount = {item.amount} info={item.info} key={index} img = {item.img} price = {props.price} value = {props.value} priceAddServ = {item.priceAddServ}/>
            
            )}
        
                </div>
   
        </div>
    )    
 }






export default AdditionalServices