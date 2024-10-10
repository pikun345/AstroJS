
  let loading=false;
  let newCont:any;
  const Parentjaga:any=document.querySelector(".blog-section");
  let nextSlug=document.querySelector(".blog-section")?.getAttribute("data-nextSlug");
  let data=document.querySelector(".blog-section")?.getAttribute("data-all");
  // for modal
  const modal :any= document.getElementById('modal');
const openModal :any= document.getElementById('open-modal');
const closeModal:any = document.getElementById('close-modal');
var c=1;
  

  const loadNext=async()=>{
    console.log("ld nxt");
    

    loading=true;
    try
    {  console.log("try");
    
      const res=await fetch(`/blog/${nextSlug}`);
      console.log("res",res);
      
      
      if(res.ok){
        const nextPost=await res.text();//recvd html convert to text
        const parser=new DOMParser();
        const newDoc=parser.parseFromString(nextPost,'text/html');//used to convert the text html or xml to actual .html 
        newCont=newDoc.getElementById(`${nextSlug}`);//this is bcoz in new doc entire html present so from the entire html it will fetch only that div where next post started 
        history.pushState(null,'',`/blog/${nextSlug}`)
        nextSlug=newCont.getAttribute("data-nextSlug");
        
        
        console.log("ldnxt dta",newCont);

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
    console.log("render");
    
    const data=await loadNext();
    console.log("data",data);
    
    const container :any= document.getElementById("nextpost");
    container.appendChild(data) 
  
  }

 

window.addEventListener('scroll',()=>{
  if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
    if(c===1){
      modal.classList.remove('hidden');
      c=0;
    }
    render();

  }

})


// for modal view
openModal.addEventListener('click', function() {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', function() {
  modal.classList.add('hidden')
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});


