from app import app
import os
import json
import unittest

class TestRoutes(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def tearDown(self):
        pass

    def test_index(self):
        """index should respond with a 200"""
        res = self.app.get('/')
        self.assertEqual(res.status_code, 200)

    def test_resume(self):
        """/resume should respond with a 200"""
        res = self.app.get('/resume')
        self.assertEqual(res.status_code, 200)

    def test_blog_posts(self):
        """/blog-posts should respond with a 200"""
        res = self.app.get('/blog-posts')
        self.assertEqual(res.status_code, 200)

if __name__ == '__main__':
    unittest.main()
