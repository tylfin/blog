from app import app
from app.configs import CONFIGS
import os
import json

path_to_blog_posts = os.path.join(CONFIGS['STATIC_PATH'], 'content/blog-posts.json')
with open(path_to_blog_posts, 'r') as blog_posts_json:
    blog_posts = blog_posts_json.read()

@app.route('/api/posts')
def posts():
    return blog_posts
