

import React from 'react'
import TechnologiesScss from './Technologies.modules.scss'
// import Showcase from '../../Components/Showcase'
import Showcase from '../../components/Showcase/Showcase';

import Card from './Component/Card';
import Apply from '../../Components/Apply/Apply';
import Title from '../../Components/Title/Title';

export default function Technologies() {
   
        const products = [
            { imageUrl: 'https://www.boatright.io/img/logo-html-2.png' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGEmLx0GPCG67rw4Sw65TwyK1ZdcV3Ul2V36GxO3R5EljVB8Xw' },
            { imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNGVhQZf6OSOQlr8yabB_KnrC3D3CHprxnMjyinCASFgsObTXZ' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZz43TyVbduoxi5dcAzT0Oyj7fVBzsOFUqt8Ncj-4-DXwHg3Gq' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvkgklq8NlAKn9iDXhI5CLH9Bvt36xUWaj8SE9Niz_QTOK29wl' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9kzh8zK2lICzmdGMfHHKcOfDUX2WCwWTPl97snpBgoeYNfYSx' },
            { imageUrl: 'https://www.boatright.io/img/logo-html-2.png' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGEmLx0GPCG67rw4Sw65TwyK1ZdcV3Ul2V36GxO3R5EljVB8Xw' },
            { imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNGVhQZf6OSOQlr8yabB_KnrC3D3CHprxnMjyinCASFgsObTXZ' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZz43TyVbduoxi5dcAzT0Oyj7fVBzsOFUqt8Ncj-4-DXwHg3Gq' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvkgklq8NlAKn9iDXhI5CLH9Bvt36xUWaj8SE9Niz_QTOK29wl' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9kzh8zK2lICzmdGMfHHKcOfDUX2WCwWTPl97snpBgoeYNfYSx' },
            { imageUrl: 'https://www.boatright.io/img/logo-html-2.png' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGEmLx0GPCG67rw4Sw65TwyK1ZdcV3Ul2V36GxO3R5EljVB8Xw' },
            { imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNGVhQZf6OSOQlr8yabB_KnrC3D3CHprxnMjyinCASFgsObTXZ' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZz43TyVbduoxi5dcAzT0Oyj7fVBzsOFUqt8Ncj-4-DXwHg3Gq' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvkgklq8NlAKn9iDXhI5CLH9Bvt36xUWaj8SE9Niz_QTOK29wl' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9kzh8zK2lICzmdGMfHHKcOfDUX2WCwWTPl97snpBgoeYNfYSx' },
            { imageUrl: 'https://www.boatright.io/img/logo-html-2.png' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGEmLx0GPCG67rw4Sw65TwyK1ZdcV3Ul2V36GxO3R5EljVB8Xw' },
            { imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNGVhQZf6OSOQlr8yabB_KnrC3D3CHprxnMjyinCASFgsObTXZ' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZz43TyVbduoxi5dcAzT0Oyj7fVBzsOFUqt8Ncj-4-DXwHg3Gq' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvkgklq8NlAKn9iDXhI5CLH9Bvt36xUWaj8SE9Niz_QTOK29wl' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9kzh8zK2lICzmdGMfHHKcOfDUX2WCwWTPl97snpBgoeYNfYSx' },
            { imageUrl: 'https://www.boatright.io/img/logo-html-2.png' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGEmLx0GPCG67rw4Sw65TwyK1ZdcV3Ul2V36GxO3R5EljVB8Xw' },
            { imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNGVhQZf6OSOQlr8yabB_KnrC3D3CHprxnMjyinCASFgsObTXZ' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZz43TyVbduoxi5dcAzT0Oyj7fVBzsOFUqt8Ncj-4-DXwHg3Gq' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvkgklq8NlAKn9iDXhI5CLH9Bvt36xUWaj8SE9Niz_QTOK29wl' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9kzh8zK2lICzmdGMfHHKcOfDUX2WCwWTPl97snpBgoeYNfYSx' },
            { imageUrl: 'https://www.boatright.io/img/logo-html-2.png' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGEmLx0GPCG67rw4Sw65TwyK1ZdcV3Ul2V36GxO3R5EljVB8Xw' },
            { imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNGVhQZf6OSOQlr8yabB_KnrC3D3CHprxnMjyinCASFgsObTXZ' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZz43TyVbduoxi5dcAzT0Oyj7fVBzsOFUqt8Ncj-4-DXwHg3Gq' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvkgklq8NlAKn9iDXhI5CLH9Bvt36xUWaj8SE9Niz_QTOK29wl' },
            { imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9kzh8zK2lICzmdGMfHHKcOfDUX2WCwWTPl97snpBgoeYNfYSx' }
            
        ];


  return (
    <div className={TechnologiesScss.technologiesPage}>
      <Showcase showcaseBigText='Technologies' showcaseSmallText='We specialize in helping you build a team of expert developers.' />
      <Title />
      <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Frontend</a></li>
        <li><a href="#">Backend</a></li>
        <li><a href="#">Framework</a></li>
        <li><a href="#">Mobile App</a></li>
        <li><a href="#">DataBase</a></li>
        <li><a href="#">Google</a></li>
        <li><a href="#">Data Science</a></li>
        <li><a href="#">Machine Learning</a></li>
        <li><a href="#">DevOps</a></li>
        <li><a href="#">CMS</a></li>
        <li><a href="#">ECommerce</a></li>
        <li><a href="#">Security</a></li>
      </ul>
      <div className={Technologies.technologiesCards}>
      {products.map((product) => (
                  <Card {...product} />
                  
               ))}
               
      </div>
      <Apply />
    </div>
  )
}


