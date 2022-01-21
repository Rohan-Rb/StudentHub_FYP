import styled from 'styled-components';
// import background from './image/bgContact1.jpg';

export const Headline = styled.h1`
        display:grid;
        justify-content: center; 
        font-size: 2.5rem;
        color: #000;
        margin-bottom: 64px;

        @media screen and (max-width: 480px){
            font-size: 2rem;
        }
    `

export const FormWrapper = styled.div`
    // display: grid;
    z-index = 1;
    height: 650px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center; 
`
export const RowCol1 = styled.div`
    display: grid;
    grid-template-areas: 'col1';
`
export const RowCol2 = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr);
    grid-template-areas: 'col1 col2';
`
export const RowCol4 = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr, 1fr, 1fr);
    grid-template-areas: 'col1 col2 col3 col4';
`
export const RowCol3 = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr, 1fr);
    grid-template-areas: 'col1 col2 col3';
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    justify-content: center; 
`
export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
`

export const Column4 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col4;
    justify-content: center; 
`

export const Icon = styled.div` 
    display: grid;
    margin-bottom: 10px;
    justify-content: center; 
`

export const Item = styled.div`
    display: grid;
`

export const Text = styled.div`
    display: grid;
    margin-bottom: 25px;
    font-size: 18px;
    justify-content: center; 
`
export const Message = styled.div`
    display: grid;
    margin-bottom: 25px;
    font-size: 18px;
    text-align: justify;
    justify-content: center; 
`

// export const Main = styled.div`
//     background-image: url(${background}); no-repeat;
//     background-size: 100% 100%;
//     height: 754px;
//     display: grid;


//     @media screen and (max-width: 768px){
//         height: 1100px;
//     }

//     @media screen and (max-width: 480px){
//         height: 800px;
//     }
// `
