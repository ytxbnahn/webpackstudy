module.exports = {
devtool: 'eval-source-map',//��������Source Maps��ѡ����ʵ�ѡ��
  entry:  __dirname + "/app/main.js",//�Ѷ���ἰ��Ψһ����ļ�
  output: {
    path: __dirname + "/public",//�������ļ���ŵĵط�
    filename: "bundle.js"//���������ļ����ļ���
  },
   module: {//�������ļ������JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
	  { 
		test: /\.css$/,
		loader: 'style-loader!css-loader?modules' 
	  },
	   { 
	   test: /\.vue$/, 
	   loader: 'vue-loader'
	   }
    ]
  },
  devServer: {
	contentBase: "./public",//���ط����������ص�ҳ�����ڵ�Ŀ¼
	colors: true,//�ն���������Ϊ��ɫ
	historyApiFallback: true,//����ת
	inline: true,//ʵʱˢ��
   } 
}
