from flask import Flask, render_template, request, jsonify
application=app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('')
db = client.dbsparta


@app.route('/')
def home():
   return render_template('index.html')

@app.route('/write')
def write():
    return render_template('write.html')

@app.route('/web')
def web():
    return render_template('/sec1/web.html')

@app.route('/sql')
def sql():
    return render_template('/sec1/sql.html')

@app.route('/solution')
def solution():
    return render_template('/sec1/solution.html')

@app.route('/react')
def react():
    return render_template('/sec1/react.html')

@app.route('/node')
def node():
    return render_template('/sec1/node.html')

@app.route('/python')
def python():
    return render_template('/sec2/python.html')

@app.route('/csharp')
def csharp():
    return render_template('/sec2/csharp.html')

@app.route('/mongo')
def mongo():
    return render_template('/sec2/mongo.html')

@app.route('/aws')
def aws():
    return render_template('/sec2/aws.html')

@app.route('/linux')
def linux():
    return render_template('/sec2/linux.html')


@app.route('/tail')
def tail():
    return render_template('/sec3/tail.html')

@app.route('/bootstrap')
def bootstrap():
    return render_template('/sec3/bootstrap.html')

@app.route('/ps')
def ps():
    return render_template('/sec3/ps.html')

@app.route('/ai')
def ai():
    return render_template('/sec3/ai.html')

@app.route('/AI')
def AI():
    return render_template('/sec4/AI.html')

@app.route('/meta')
def meta():
    return render_template('/sec4/meta.html')

@app.route('/vr')
def vr():
    return render_template('/sec4/vr.html')

@app.route('/bigdata')
def bigdata():
    return render_template('/sec4/bigdata.html')

@app.route('/cloud')
def cloud():
    return render_template('/sec4/cloud.html')


@app.route('/guest')
def guest():
    return render_template('/sec5/guest.html')




@app.route("/mypost", methods=["POST"])
def mypost_post():
    title_receive = request.form['title_give']
    textbody_receive= request.form['textbody_give']
    selindex_receive= request.form['selindex_give']
    date_receive= request.form['date_give']
    id_receive= request.form['id_give']

    doc={
        'title':title_receive,
        'textbody':textbody_receive,
        'category':selindex_receive,
        'date'    :date_receive,
        'id'      :id_receive  
    }
    db.posts.insert_one(doc)
    return jsonify({'msg': '작성완료!'})

@app.route("/mypost", methods=["GET"])
def mypost_get():
    rows = list(db.posts.find({},{'_id':False}))
    return jsonify({'result':rows})


@app.route("/myguest", methods=["POST"])
def myguest_post():
    guestText_receive = request.form['guestText_give']
    date_receive= request.form['date_give']
    

    doc={
        'guestText':guestText_receive,
        'date'    :date_receive,
          
    }
    db.guests.insert_one(doc)
    return jsonify({'msg': '작성완료!'})

@app.route("/myguest", methods=["GET"])
def myguest_get():
    rows = list(db.guests.find({}, {"_id": False}))
    return jsonify({"result": rows})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)