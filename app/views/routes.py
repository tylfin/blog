from flask import render_template
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

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/blog-posts')
def blog_posts():
    return render_template('blog-posts.html')
