from flask import Blueprint, request, jsonify

curr = Blueprint('basic', __name__)

@curr.route('/hello')
def index():
    return 'Hello, World!'