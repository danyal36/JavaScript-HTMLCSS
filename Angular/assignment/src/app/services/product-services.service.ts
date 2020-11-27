import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  items = [
    {prductID: 1, productTitle: 'HP ProBook 640', image: 'https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fGhwJTIwbGFwdG9wfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
    price: '$ 1,179.50',averageRating:{five:21,four:9,three:0,two:0,one:0} , description: '8 GB memory; 256 GB SSD storage', details: 'Optional 8th Gen quad–core Intel® Core™ processor AMD Radeon™ discrete graphics'},

    {prductID: 2, productTitle: 'Sony Alpha DSLR', image: 'https://images.unsplash.com/photo-1525288953762-38996f06cf0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMGRzbHJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
    price: '$ 838.00', description: 'Sony Alpha a7 IIK E-mount', details: 'Interchangeable lens mirrorless camera with full frame sensor with 28-70mm Lens'},

    {prductID: 3, productTitle: 'Dell Laptop', image: 'https://images.unsplash.com/photo-1565339119519-c9eaa1918b9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fGRlbGwlMjBsYXRvcHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: '$ 1,064.29 ', description: '32GB Ddr4 Memory, 1st Hard Drive:1TB HDD Boot Driver', details: '7th Gen Intel Core i5-7300HQ Quad-Core'},

    {prductID: 4, productTitle: 'Mac Book Pro', image: 'https://images.unsplash.com/photo-1516375610492-910a43876383?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzV8fG1hYyUyMGJvb2t8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
    price: '$ 1,179.50', description: '8 GB memory; 256 GB SSD storage', details: 'Optional 8th Gen quad–core Intel® Core™ processor AMD Radeon™ discrete graphics'},

    {prductID: 5, productTitle: 'Iphone 11', image: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTF8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
    price: '$ 1,179.50', description: '8 GB memory; 256 GB SSD storage', details: 'Optional 8th Gen quad–core Intel® Core™ processor AMD Radeon™ discrete graphics'},

    {prductID: 6, productTitle: 'Play sation', image: 'https://images.unsplash.com/photo-1591196702597-062a87208fed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYXlzdGF0aW9ufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
    price: '$ 1,179.50', description: '8 GB memory; 256 GB SSD storage', details: 'Optional 8th Gen quad–core Intel® Core™ processor AMD Radeon™ discrete graphics'},
  ];
  constructor() { }
  getProduct(): any {
    return this.items;
  }
}
