from flask import Flask, render_template, Response, request, jsonify, send_from_directory, send_file
from flask_cors import CORS
from gtts import gTTS
from nocache import nocache

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
CORS(app)


@app.route('/')
@nocache
def index():
    return render_template('index.html')


@app.route('/sendText', methods=['POST'])
@nocache
def achieve_text():
    json_result = request.get_json()
    inverse = json_result['inverse']
    text = json_result['text']
    if inverse:
        text = text[::-1]
    print(text)
    create_audio(text)
    print(inverse)
    print(text)
    return Response(status=200, mimetype='application/json')


@app.route('/music')
@nocache
def download_file():
    return send_from_directory(directory='/home/dawid/Repositories/WyzwaniaSpoleczenstwa Informacyjnego/backend/', filename='Audio.mp3', as_attachment=True)


def create_audio(text):
    language = 'pl'
    myob=gTTS(text=text, lang=language, slow=False)
    myob.save('Audio.mp3')


if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)
