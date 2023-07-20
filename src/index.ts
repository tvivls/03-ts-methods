import {hidden, visibilityChange, visible} from './visibility';


const displayResult = async (description: string, visibilityFn: () => Promise<boolean>) => {
    const visibilityStatus = await visibilityFn();
    const body = document.querySelector('body');
    const text = document.createElement('p');
    text.innerText = `${description}: ${visibilityStatus}`;
    body?.appendChild(text);
};

displayResult('visibility change', visibilityChange);
displayResult('the user is here', visible);
displayResult('the user was leaving', hidden);
