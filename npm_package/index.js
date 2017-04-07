export function standart()
{
    if(typeof window != 'undefined')
    {
    }else 
    {
        console.error('top page loader only worked on client')
    }
}

export function looping()
{
    if(typeof window != 'undefined')
    {
    }else 
    {
        console.error('top page loader only worked on client')
    }
}

export default function index()
{
    if(typeof window != 'undefined')
    {
        return {
            standart, 
            looping
        }
    }else 
    {
        console.error('top page loader only worked on client')
    }
}