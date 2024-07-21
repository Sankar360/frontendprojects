import { useState } from "react";
import "./Qrcode.css";

export const Qrcode = () => {
    const [img,setImg]= useState("");
   const [loading,setLoading]=useState(false);
   const [qrdata,setQrdatta]=useState("sankar");
   const [qrsize,setQrsize]=useState("150");
   async function generateqr(){
    setLoading(true);
    try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`
        setImg(url);
    }catch(error){
        console.log("error generating QR code",error)
    }finally{
        setLoading(false);
    }
   }
   function downloadqrcode(){
    fetch(img)
    .then((response)=>response.blob())
    .then((blob)=>{
        const link=document.createElement("a");
        link.href=URL .createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch((error)=>{
        console.error("error downlpading qrcode",error);
    })
   }
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>please wait....</p>}
        {img && <img src={img} style={{width:"130px",height:"130px"}}className="qrcodeimg" alt="" />}
        <div>
            <label htmlFor="datainput" className="input-label">Data For Qr code:</label>
            <input type="text" value={qrdata} onChange={(e)=>{setQrdatta(e.target.value)}} placeholder="Enter data for Qrcode" id="datainput" />
            <label htmlFor="sizeinput" className="input-label">Image size(e.g., 150):</label>
            <input type="text" value={qrsize} onChange={(e)=>{setQrsize(e.target.value)}} placeholder="Enter image size" id="sizeinput" />
            <button className="generatebutton" disabled={loading} onClick={generateqr}>Generate Qr Code</button>
            <button className="downloadbutton" onClick={downloadqrcode}>Download Qr code</button>
        </div>
        <p className="footer">Designed by <a href="#">sankar</a></p>
    </div>
  )
}
