
  let loading=false;
  let newCont:any;
  const Parentjaga:any=document.querySelector(".blog-section");
  let nextSlug=document.querySelector(".blog-section")?.getAttribute("data-nextSlug");
  let data=document.querySelector(".blog-section")?.getAttribute("data-all");
  

  console.log("nxt slug =",nextSlug);
  const loadNext=async()=>{
    console.log("loading called");


    loading=true;
    try
    {
      const res=await fetch(`/blog/${nextSlug}`);
      console.log("resp=",res);
      
      if(res.ok){
        const nextPost=await res.text();//recvd html convert to text
        const parser=new DOMParser();
        const newDoc=parser.parseFromString(nextPost,'text/html');//used to convert the text html or xml to actual .html 
        newCont=newDoc.getElementById(`${nextSlug}`);//this is bcoz in new doc entire html present so from the entire html it will fetch only that div where next post started 
        history.pushState(null,'',`/blog/${nextSlug}`)
        nextSlug=newCont.getAttribute("data-nextSlug");
        
        
      
        return newCont;
        
        
      }

    }
    catch(err)
    {
      console.error("fetching err is ",err);
      
    }
    finally{
      loading=false;
    }
    

  }


  async function render(){
    const data=await loadNext();
    console.log(data);
    
  
     console.log("render called");
     
   const container :any= document.getElementById("nextpost");
  
  container.appendChild(data) 
  
  }
  

window.addEventListener('scroll',()=>{
  if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
    render()
  }

})


