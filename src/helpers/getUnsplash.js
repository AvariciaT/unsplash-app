export const getUnsplash = async( searchData )=>{

    const apiKey= 'qnxJOkWjScwjxJz2FgOu_YpXRGuiTdYg4y6tCvadHv0';
    const url= `https://api.unsplash.com/search/photos/?query=${searchData}&page=1&client_id=${apiKey}`;
    fetch(url,{
        method:"GET",
        headers:{ Accept: "application/json" }
    })
    const resp= await fetch(url);
    const { results }   = await resp.json();
    const gifs=results.map(img =>({
        id: img.id,
        description: img.alt_description,
        urls: img.urls.regular,
        first_name: img.user.first_name,
        last_name: img.user.last_name,
    }));
    // console.log(gifs);   
    // console.log(results);    
    return gifs;
}

