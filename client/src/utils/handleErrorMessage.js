const errorMsg = (error) => {
    let errmsg = 'Terjadi kesalahan. Silahkan coba lagi beberapa saat';
    let newError = error.response.data.msg;
    if (typeof newError === 'string') {
      errmsg = newError
    } else {
      errmsg = newError.join(', ')
    }

    return errmsg;
}

export default errorMsg