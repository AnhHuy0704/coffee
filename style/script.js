const menuContent = document.querySelector('.menu-content:nth-child(1)');
let nextvar = 0;
function nextContent(){

    if(nextvar==0){
        menuContent.style.marginLeft='-'+'50%';
        nextvar=1;
    }
    else{
        menuContent.style.marginLeft='+'+'0%';
        nextvar=0

    }

}
if(menuContent.offsetWidth<=740){
    setInterval(nextContent,5000);
}
const showMenu = document.querySelector('.show-hidden-menu'),
checkedMenu = document.querySelector('#hidden-menu'),
mobilesubMenu = document.querySelector('.mobile-sub-menu'),
closeMenu = document.querySelector('#close-sub-menu');


showMenu.addEventListener('click',e=>{

    

        mobilesubMenu.style.marginLeft='0%';
        
    
})
closeMenu.addEventListener('click',e=>{

    mobilesubMenu.style.marginLeft='-100%';

})

const itemMenu = document.querySelector('#item-menu'),
hiddenSubItem = document.querySelector('#hidden-sub-item'),
hiddenlist = document.querySelectorAll('.hidden-list-1'),
hiddenSublist = document.querySelectorAll('.hidden-sub-list-1'),
hiddenSublistText = document.querySelectorAll('.hidden-sub-list-1 > p');
let showHiddensub = 0;
itemMenu.addEventListener('click',e=>{

    if(showHiddensub==0){
        hiddenlist.forEach((item,key)=>{

            item.style.fontSize="15px";
            item.style.paddingTop="15px";
            item.style.paddingBottom="15px";
            item.style.borderBottom="1px solid rgb(1, 1, 1,0.1)";

        })
        hiddenSublist.forEach((item,key)=>{

            item.style.paddingTop="5px";
            item.style.paddingBottom="10px";

        })
        hiddenSublistText.forEach((item,key)=>{

            item.style.fontSize="14px";
            item.style.paddingTop="8px";
            item.style.paddingBottom="8px";
 
         })
         hiddenSubItem.style.fontSize="0px";
         hiddenSubItem.style.paddingTop="0px";
         hiddenSubItem.style.paddingBottom="0px";
         hiddenSubItem.style.borderBottom="none";
        showHiddensub=1;
    
    }
    else{
        hiddenlist.forEach((item,key)=>{

            item.style.fontSize="0px";
            item.style.paddingTop="0px";
            item.style.paddingBottom="0px";
            item.style.borderBottom="none";

        })
        hiddenSublist.forEach((item,key)=>{

            item.style.paddingTop="0px";
            item.style.paddingBottom="0px";

        })
        hiddenSublistText.forEach((item,key)=>{

           item.style.fontSize="0px";
           item.style.paddingTop="0px";
           item.style.paddingBottom="0px";

        })
       
        hiddenSubItem.style.fontSize="0px";
        hiddenSubItem.style.paddingTop="0px";
        hiddenSubItem.style.paddingBottom="0px";
        hiddenSubItem.style.borderBottom="none";
        showHiddensub=0;
    }
    

})

const changeItem1 = document.querySelector(".item1-content"),
imgItem1 = document.querySelectorAll('.item1-content img');


let itemIndex=0,
    maxIndex=imgItem1.length;

function changeItem(){

    

    if(itemIndex>=0 && itemIndex<maxIndex*100-100){

        itemIndex+=100;
        changeItem1.style.marginLeft="-"+itemIndex+'%';
      
    }
    else{

        itemIndex=0;
        if(changeItem1!=null){
           changeItem1.style.marginLeft='0%';
        }

    }

}

    setInterval(changeItem,2000);

function addchild(){
    
}

//item-4
const changeslide1 = document.querySelectorAll('.item-4-slide-nextback i'),
slideItem1 = document.querySelector('.item-4-slide-container');
let slideIndex=0;
changeslide1.forEach((item,key)=>{

    item.addEventListener("click",e=>{

        if(e.target == changeslide1[0] ){

           
                if(slideIndex>=0 && slideIndex<200){

                    slideIndex+=100;
                    slideItem1.style.marginLeft="-"+slideIndex+"%";

                }
                else{

                    slideIndex=0
                    slideItem1.style.marginLeft="";
                }

        }
        else{

            if(slideIndex>=0 && slideIndex<200){

                slideIndex+=100;
                slideItem1.style.marginLeft="-"+slideIndex+"%";

            }
            else{

                slideIndex=0
                slideItem1.style.marginLeft="";
            }

        }

    })

})
//menuitem
const menuItem2 = document.querySelector('#item-container .item-2'),
menuItem1 = document.querySelector('#item-container .item-1'),
itemContent = document.querySelectorAll('.item-1 .item-1-content'),
itemsubContent = document.querySelectorAll('.item-1-content .item-1-sub'),
headerItem = document.querySelectorAll('.item-1-content header'),
headerI = document.querySelectorAll('.item-1-content header i');
if(menuItem1!=null){
    menuItem2.style.top = '-' +  menuItem1.offsetHeight +'px';
}
itemContent.forEach((item,key)=>{

    item.addEventListener('click',e=>{  
       
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        for(var i=0;i<itemContent.length;i++){

            if(itemContent[key]==itemContent[i]){
               
                itemsubContent[i].style.display='block';
                headerItem[i].style.color='pink';
                headerItem[i].style.fontWeight='bold';
                headerItem[i].style.fontSize='17px';
                headerI[i].style.display='inline';

            }
            else{

                itemsubContent[i].style.display='none';
                headerItem[i].style.color='';
                headerItem[i].style.fontWeight='';
                headerItem[i].style.fontSize='';
                headerI[i].style.display='';
                
            }

        }
        menuItem2.style.top = '-' +  menuItem1.offsetHeight +'px';

    })

})

//show-product
const listProduct = document.querySelectorAll('#item-container .item-2 .item-2-content');

headerItem.forEach((item,key)=>{

    item.addEventListener('click',e=>{

        if(e.target == headerItem[0]){
           
            for(var i=0;i<listProduct.length;i++){

                 listProduct[i].style.display='block';

            }

        }
        else{

            for(var i=0;i<listProduct.length;i++){

               if(headerItem[key] == headerItem[i+1]){

                    listProduct[i].style.display='block';
                   
               }
               else{

                    listProduct[i].style.display='none';

               }

           }

        }

    })

})
//chuyen nha buton click
const chuyenNhabtn = document.querySelectorAll('.item-1-btn input');

chuyenNhabtn.forEach((item,key)=>{

    item.addEventListener('click',e=>{

        for(var i=0;i<chuyenNhabtn.length;i++){

            if(chuyenNhabtn[key]==chuyenNhabtn[i]){

                chuyenNhabtn[i].style.backgroundColor='#d77f2e20';
                chuyenNhabtn[i].style.color='#d77f2e';
                chuyenNhabtn[i].style.border='none';

            }
            else{

                chuyenNhabtn[i].style.backgroundColor='';
                chuyenNhabtn[i].style.color='';
                chuyenNhabtn[i].style.border='';

            }

        }

    })

})
/*paging*/
const listItemcoffeeholic = document.querySelectorAll('.coffeeholic-item'),
paging = document.querySelector('#paging');
console.log(paging)
let limit = 5,
thisPage=1;

function showItem(){

    var begin=limit*(thisPage-1),
    end=limit*thisPage-1;
    listItemcoffeeholic.forEach((item,key)=>{

        if(key>=begin&&key<=end){

            listItemcoffeeholic[key].style.display='';

        }
        else{

            listItemcoffeeholic[key].style.display='none';


        }
       
 
    })
    listPage();
   
}
showItem();
function listPage(){

    var pageItem = Math.ceil(listItemcoffeeholic.length/limit);
    for(i=1;i<=pageItem;i++){

        var newPage = document.createElement('li');
        newPage.innerHTML=i;
        newPage.setAttribute('onclick',"changePage("+i+")");
        newPage.addEventListener('click',e=>{
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; 
        }); 
        paging.appendChild(newPage);

    }

}

function changePage(i){

    thisPage=i;
    showItem();
}

const coffeeholicBtn = document.querySelectorAll('.item-1-btn input'),
coffeeholicDiv = document.querySelectorAll('.item-2-content');

 coffeeholicBtn.forEach((item,key)=>{

    item.addEventListener('click',e=>{

        for(var i=0;i<coffeeholicBtn.length;i++){

            if(coffeeholicBtn[key]==coffeeholicBtn[i]){

                coffeeholicDiv[i].style.display='grid';

            }
            else{

                coffeeholicDiv[i].style.display='none';


            }


        }

    })

 })
 /*store */
 const storeArea = document.querySelectorAll('.store-item-sub p');
 storeArea.forEach((item,key)=>{

    item.addEventListener('click',e=>{

            for(var i=0;i<=storeArea.length;i++){

                if(storeArea[key]==storeArea[i]){

                    storeArea[i].style.fontSize='17px';
                    storeArea[i].style.color="#d77f2e";

                }
                else{

                    storeArea[i].style.fontSize='16px';
                    storeArea[i].style.color="black";

                }

            }
    })


 })
 //close banner cloudfee
 var closeBanner=document.querySelector('.baner_cloudfee i'),
    bannerCloudfee=document.querySelector('.baner_cloudfee')
 closeBanner.addEventListener('click',e=>{
    bannerCloudfee.style.opacity='0';
 })


