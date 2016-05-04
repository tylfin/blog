from flask import render_template, flash, redirect, session, url_for, request, g
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
