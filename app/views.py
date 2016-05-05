from flask import render_template, flash, redirect, session, url_for, request, g
import json
from app import app

@app.errorhandler(404)
def not_found_error(error = None):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_error(error = None):
    return render_template('500.html'), 500

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/posts')
def posts():
    blog_posts = []
    for i in range(10):
        blog_posts.append({'id': i, 'title': i, 'img': 'http://placehold.it/850x350', 'author': 'Tyler',
            'comments': 0, 'content': 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.'})
    return json.dumps(blog_posts)
