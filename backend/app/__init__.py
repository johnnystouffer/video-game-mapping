from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from .routes.basic import curr

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    # app.config.from_object('config')
    # db.init_app(app)
    # jwt.init_app(app)

    app.register_blueprint(curr, url_prefix='/basic')

    return app





