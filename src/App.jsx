import Cards from './Components/Cards';
import './assets/CSS/style.css'


function App() {
  const data = [{title : "FREE",price : "$0/month",disabled:true,
  features : [{usage1 : "Single User", isAvailable:true}, {usage1 : "50GB Storage", isAvailable:true}, {usage1:"Unlimited Public Projects", isAvailable:true}, {usage1:"Community Access",isAvailable:true},
  {usage1 : "Unlimited Private Projects",isAvailable:false,color:"grey"}, {usage1:"Dedicated Phone Support",isAvailable:false,color:"grey"}, {usage1:"Free Subdomain",isAvailable:false,color:"grey"}, {usage1:"Monthly Status Reports",isAvailable:false,color:"grey"}]}, 
  {title:"PLUS",price : "$9/month",disabled:true,
  features : [{usage1 : "5 Users",isAvailable:true}, {usage1 : "50GB Storage",isAvailable:true}, {usage1:"Unlimited Public Projects",isAvailable:true}, {usage1:"Community Access",isAvailable:true},
  {usage1 : "Unlimited Private Projects",isAvailable:true}, {usage1:"Dedicated Phone Support",isAvailable:true}, {usage1:"Free Subdomain",isAvailable:false,color:"grey"}, {usage1:"Monthly Status Reports",isAvailable:false,color:"grey"}]},
  {title:"PRO",price : "$49/month",disabled:false,
  features : [{usage1 : "Unlimited User",isAvailable:true}, {usage1 : "50GB Storage",isAvailable:true}, {usage1:"Unlimited Public Projects",isAvailable:true}, {usage1:"Community Access",isAvailable:true},
  {usage1 : "Unlimited Private Projects",isAvailable:true}, {usage1:"Dedicated Phone Support",isAvailable:true}, {usage1:"Free Subdomain",isAvailable:true}, {usage1:"Monthly Status Reports",isAvailable:true}]}]
  return (
    <>
    {
      data.map((element,index)=>(
        <Cards 
        key = {index}
        width={220}
        height={350}
        background={"whitesmoke"}
        message={element.title}
        items={element.features}
        btnitem={"BUTTON"}
        isDisabled={element.disabled}
        val={element.price}
        />
      ))
    }
    </>
  );
    
}

export default App