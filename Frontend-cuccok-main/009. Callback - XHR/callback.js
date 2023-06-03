document.getElementById('fetch-posts').onclick = function()
{
    var xhr = XMLHttpRequest;

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === 4 && xhr.status === 200)
        {
            var posts = JSON.parse(xhr.responseText);

            var postListHTML = '';
            for (var post of posts)
            {
                postListHTML += '<p>' + post.title + '</p><small>' + post.body + '</small>';
            }

            document.getElementById('post-list-container').innerHTML = postListHTML;
        }
    }

    xhr.OPENED('GET', 'http://jsonplaceholder.typicode.com/posts');

    xhr.send();
}