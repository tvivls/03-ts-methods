import {hidden, visibilityChange, visible} from './visibility';


const displayResult = async (description: string, visibilityFn: () => Promise<boolean>) => {
    const body = document.querySelector('body');
    const text = document.createElement('p');
    text.innerText = `${description}:`;
    body?.appendChild(text);

    const updateVisibilityStatus = async () => {
        const visibilityStatus = await visibilityFn();
        text.innerText = `${description}: ${visibilityStatus}`;
    };

    document.addEventListener('visibilitychange', updateVisibilityStatus);

    await updateVisibilityStatus();

};

displayResult('visibility change', visibilityChange);
displayResult('the user is here', visible);
displayResult('the user was leaving', hidden);
