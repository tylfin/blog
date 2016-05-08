from app import app
import os
import json
import unittest

class TestAPI(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def tearDown(self):
        pass

    def test_api_posts(self):
        """/api/posts should respond with a list of blog post json objects"""
        res = self.app.get('/api/posts')
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertIsInstance(data, list)

if __name__ == '__main__':
    unittest.main()
