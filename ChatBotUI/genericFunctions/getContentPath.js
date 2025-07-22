import contentProjectSpecificPath from './../contentProjectSpecificPath.json'

const decideContentPath = (item , projectId , deviceId)=>{
    console.log(item,'item');
    console.log(projectId,'projectId');
    
    
    let contentPath ;
    let projectSpecificUrl;
    projectSpecificUrl = contentProjectSpecificPath[projectId];
      if(['11', '7', '6', '105'].includes(deviceId)){
        contentPath = `${projectSpecificUrl}appclose?path=${item.contentPath}`
      } else {
        console.log("HIi");
        
        contentPath = `${projectSpecificUrl}${item.contentPath}`
      }
    console.log("finalContentPath ",contentPath);
    
    return contentPath

    
  }

  export default decideContentPath;