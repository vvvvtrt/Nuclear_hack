import React, {useState} from "react";
import "./waller.css"


// function Folder(props){
//     const [isOpen, setIsOpen] = useState(false);

//     return(<>
//     <h5 onClick={() => {setIsOpen(prev => !prev)}}>
//         props.header
//     </h5>
//     </>)
// }






// function Waller(){

//     // function generateWaller(data, counter=0){
//     //     if(counter >= 50){
//     //         console.log("Уже сгенерировано 50 объектов")
//     //         return 0;
//     //     }
//     //     for(let i in data){
//     //         if(typeof(i) === 'string'){
//     //         // if(i.type === 'leave'){

//     //             data.append(i);
//     //             return 0;
//     //         }
//     //         else {
//     //             data.i = [];
//     //             generateWaller(data.i, counter+1);
//     //         }
//     //     }
        
//     // }

//     // function onClick(){
//     //     useState
//     // }
//     //отдельный компонент папка - внутри состояние UseState isOpen = true/false



//     return (
//         <>
//         <div classname="wrapper">
//           <h3 classname="heading">File Browser</h3>
//           <div classname="file-browser">
//             <ul>
//               <li classname="folder folder-open">
//                 <p>Dashboard</p>
//                 <ul>
//                   <li classname="file">Accounts Module</li>
//                   <li classname="file">Help Module</li>
//                 </ul>
//               </li>
//               <li classname="folder">
//                 <p>Transfers</p>
//                 <ul>
//                   <li classname="folder folder-open">
//                     <p>Quick</p>
//                     <ul>
//                       <li classname="file">Disclosures</li>
//                       <li classname="file">Modals</li>
//                     </ul>
//                   </li>
//                   <li classname="file">Classic</li>
//                   <li classname="folder">
//                     <p>Scheduled</p>
//                     <ul>
//                       <li classname="folder">
//                         <p>Calendar</p>
//                         <ul>
//                           <li classname="file">Days</li>
//                           <li classname="file">Months</li>
//                         </ul>
//                       </li>
//                       <li classname="file">Modals</li>
//                     </ul>
//                   </li>
//                   <li classname="file">History</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </>
      
//         )
// }



// const Waller = () => {
//     const [openFolders, setOpenFolders] = useState([]);

//     const handleFolderClick = (folderName) => {
//         setOpenFolders((prevOpenFolders) => {
//             if (prevOpenFolders.includes(folderName)) {
//                 return prevOpenFolders.filter((folder) => folder !== folderName);
//             }
//             return [...prevOpenFolders, folderName];
//         });
//     };

//     return (
//         <div className="wrapper">
//             <h3 className="heading">File Browser</h3>
//             <div className="file-browser">
//                 <ul>
//                     <li className={`folder ${openFolders.includes("Dashboard") ? "folder-open" : ""}`} onClick={() => handleFolderClick("Dashboard")}>
//                         Dashboard
//                         <ul>
//                             <li className="file">Accounts Module</li>
//                             <li className="file">Help Module</li>
//                         </ul>
//                     </li>
//                     <li className={`folder ${openFolders.includes("Transfers") ? "folder-open" : ""}`} onClick={() => handleFolderClick("Transfers")}>
//                         Transfers
//                         <ul>
//                             <li className={`folder ${openFolders.includes("Quick") ? "folder-open" : ""}`} onClick={() => handleFolderClick("Quick")}>
//                                 Quick
//                                 <ul>
//                                     <li className="file">Disclosures</li>
//                                     <li className="file">Modals</li>
//                                 </ul>
//                             </li>
//                             <li className="file">Classic</li>
//                             <li className="folder">
//                                 Scheduled
//                                 <ul>
//                                     <li className="folder">Calendar
//                                         <ul>
//                                             <li className="file">Days</li>
//                                             <li className="file">Months</li>
//                                         </ul>
//                                     </li>
//                                     <li className="file">Modals</li>
//                                 </ul>
//                             </li>
//                             <li className="file">History</li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

const Waller = () => {
    const [openFolders, setOpenFolders] = useState({});

    const handleFolderClick = (folderName) => {
        setOpenFolders((prevOpenFolders) => {
            return { ...prevOpenFolders, [folderName]: !prevOpenFolders[folderName] };
        });
    };

    return (
        <div className="wrapper">
            <h3 className="heading">Ценовые каталоги</h3>
            <div className="file-browser">
                <ul>
                    <li className={`folder ${openFolders["Dashboard"] ? "folder-open" : ""}`} onClick={(e) => {e.stopPropagation(); handleFolderClick("Dashboard")}}>
                        Dashboard
                        <ul>
                            <li className="file">Accounts Module</li>
                            <li className="file">Help Module</li>
                        </ul>
                    </li>
                    <li className={`folder ${openFolders["Transfers"] ? "folder-open" : ""}`} onClick={(e) => {e.stopPropagation(); handleFolderClick("Transfers")}}>
                        Transfers
                        <ul>
                            <li className={`folder ${openFolders["Quick"] ? "folder-open" : ""}`} onClick={(e) => {e.stopPropagation(); handleFolderClick("Quick")}}>
                                Quick
                                <ul>
                                    <li className="file">Disclosures</li>
                                    <li className="file">Modals</li>
                                </ul>
                            </li>
                            <li className="file">Classic</li>
                            <li className={`folder ${openFolders["Scheduled"] ? "folder-open" : ""}`} onClick={(e) => {e.stopPropagation(); handleFolderClick("Scheduled")}}>
                            {/* <li className="folder"> */}
                                Scheduled
                                <ul>
                                <li className={`folder ${openFolders["Calendar"] ? "folder-open" : ""}`} onClick={(e) => {e.stopPropagation(); handleFolderClick("Calendar")}}>
                                Calendar     
                                        <ul>
                                            <li className="file">Days</li>
                                            <li className="file">Months</li>
                                        </ul>
                                    </li>
                                    <li className="file">Modals</li>
                                </ul>
                            </li>
                            <li className="file">History</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default Waller;
