import React, {useEffect} from 'react';

const Footer = ()=>{
    

    useEffect(()=>{
        const footer = document.querySelector('footer')
        footer.style.transition = '4s';
        
        const scrollHandler = ()=>{
            if( window.scrollY + window.innerHeight > footer.parentElement.scrollHeight){
                footer.classList.remove('footer-animation');
                
                console.log(footer)
            }
            // console.log(window.scrollY + window.innerHeight,footer.parentElement.scrollHeight + footer.clientHeight)
            else{
                footer.classList.add('footer-animation');
            }
        }
        window.addEventListener('scroll',scrollHandler);

        return ()=> window.removeEventListener('scroll', scrollHandler);
    },[])

    return(
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            {` `}
            And <a href="https://wordpress.org/">WordPress</a>
        </footer>
    )
}

export default Footer ;