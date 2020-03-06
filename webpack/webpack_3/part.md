style-loader  以style标签的形式插入head头
css-loader 可以在js文件中import css文件

import './home.css';  
import style from './home.css';
以上两种引用都可以
第二种 style打印出来是个空对象

url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。大于的话默认使用file-loader处理，
    url-loader不会将图片打包进output folder ，但是file-folder会，我理解引用file-loader处理的文件是多了一次请求
file-loader 
{
    loader: 'url-loader',
    options: {
        limit: 8192,
        fallback: '', // 提供一个loader用来处理文件字节大于limit
        mimetype: '', // 为文件设置mime类型，如果不指定，则文件扩展名将用mime 类型。
        // mime类型https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    }
}

install typescript ts-loader