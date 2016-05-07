from app import app
import json

@app.route('/api/posts')
def posts():
    blog_posts = []
    for i in range(10):
        blog_posts.append({'id': i, 'title': i, 'img': 'http://placehold.it/850x350', 'author': 'Tyler',
            'comments': 0, 'content': 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.'})
    return json.dumps(blog_posts)
