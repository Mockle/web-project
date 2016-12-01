import json
import os
import time
import sqlite3
from flask import Flask, Response, request, g

DATABASE = 'database/superDB.db'

app = Flask(__name__, static_folder='public')

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/api/db', methods=['GET', 'POST'])
def queryFn():
    if request.method == 'GET':
        result = selectSql(request.args.get('query'))
        return json.dumps(result)
    else:
        insertSql()

def selectSql(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = [dict((cur.description[i][0], value) \
               for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.close()
    return (rv[0] if rv else None) if one else rv

def insertSql():
    return 'MOO'

@app.route('/')
def rootFn():
    return 'RAISE THE ROOT!!'

@app.route('/index')
def indexFn():
    return app.send_static_file('index.html')

@app.route('/login')
def loginFn():
    return app.send_static_file('login.html')

if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT", 3000)), debug=True)