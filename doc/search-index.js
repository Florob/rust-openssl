var searchIndex = {};
searchIndex['openssl'] = {"items":[[0,"","openssl",""],[0,"ssl","",""],[1,"SslContext","openssl::ssl","An SSL context object"],[11,"ctx","","",0],[1,"X509StoreContext","",""],[11,"ctx","","",1],[1,"X509","","A public key certificate"],[11,"ctx","","",2],[11,"x509","","",2],[1,"X509Name","",""],[11,"x509","","",3],[11,"name","","",3],[1,"SslStream","","A stream wrapper which handles SSL encryption for an underlying stream."],[11,"stream","","",4],[11,"ssl","","",4],[11,"buf","","",4],[2,"SslMethod","","Determines the SSL method supported"],[12,"Sslv3","","Only support the SSLv3 protocol",5],[12,"Tlsv1","","Only support the TLSv1 protocol",5],[12,"Sslv23","","Support the SSLv2, SSLv3 and TLSv1 protocols",5],[2,"SslVerifyMode","","Determines the type of certificate verification used"],[12,"SslVerifyPeer","","Verify that the server's certificate is trusted",6],[12,"SslVerifyNone","","Do not verify the server's certificate",6],[2,"X509NameFormat","",""],[12,"Rfc2253","","",7],[12,"Oneline","","",7],[12,"Multiline","","",7],[2,"X509ValidationError","",""],[12,"X509UnableToGetIssuerCert","","",8],[12,"X509UnableToGetCrl","","",8],[12,"X509UnableToDecryptCertSignature","","",8],[12,"X509UnableToDecryptCrlSignature","","",8],[12,"X509UnableToDecodeIssuerPublicKey","","",8],[12,"X509CertSignatureFailure","","",8],[12,"X509CrlSignatureFailure","","",8],[12,"X509CertNotYetValid","","",8],[12,"X509CertHasExpired","","",8],[12,"X509CrlNotYetValid","","",8],[12,"X509CrlHasExpired","","",8],[12,"X509ErrorInCertNotBeforeField","","",8],[12,"X509ErrorInCertNotAfterField","","",8],[12,"X509ErrorInCrlLastUpdateField","","",8],[12,"X509ErrorInCrlNextUpdateField","","",8],[12,"X509OutOfMem","","",8],[12,"X509DepthZeroSelfSignedCert","","",8],[12,"X509SelfSignedCertInChain","","",8],[12,"X509UnableToGetIssuerCertLocally","","",8],[12,"X509UnableToVerifyLeafSignature","","",8],[12,"X509CertChainTooLong","","",8],[12,"X509CertRevoked","","",8],[12,"X509InvalidCA","","",8],[12,"X509PathLengthExceeded","","",8],[12,"X509InvalidPurpose","","",8],[12,"X509CertUntrusted","","",8],[12,"X509CertRejected","","",8],[12,"X509SubjectIssuerMismatch","","",8],[12,"X509AkidSkidMismatch","","",8],[12,"X509AkidIssuerSerialMismatch","","",8],[12,"X509KeyusageNoCertsign","","",8],[12,"X509UnableToGetCrlIssuer","","",8],[12,"X509UnhandledCriticalExtension","","",8],[12,"X509KeyusageNoCrlSign","","",8],[12,"X509UnhandledCriticalCrlExtension","","",8],[12,"X509InvalidNonCA","","",8],[12,"X509ProxyPathLengthExceeded","","",8],[12,"X509KeyusageNoDigitalSignature","","",8],[12,"X509ProxyCertificatesNotAllowed","","",8],[12,"X509InvalidExtension","","",8],[12,"X509InavlidPolicyExtension","","",8],[12,"X509NoExplicitPolicy","","",8],[12,"X509DifferentCrlScope","","",8],[12,"X509UnsupportedExtensionFeature","","",8],[12,"X509UnnestedResource","","",8],[12,"X509PermittedVolation","","",8],[12,"X509ExcludedViolation","","",8],[12,"X509SubtreeMinmax","","",8],[12,"X509UnsupportedConstraintType","","",8],[12,"X509UnsupportedConstraintSyntax","","",8],[12,"X509UnsupportedNameSyntax","","",8],[12,"X509CrlPathValidationError","","",8],[12,"X509ApplicationVerification","","",8],[12,"X509UnknownError","","",8],[0,"error","",""],[2,"SslError","openssl::ssl::error","An SSL error"],[12,"StreamError","","The underlying stream has reported an error",9],[12,"SslSessionClosed","","The SSL session has been closed by the other end",9],[12,"OpenSslErrors","","An error in the OpenSSL library",9],[2,"OpensslError","","An error from the OpenSSL library"],[12,"UnknownError","","An unknown error",10],[11,"library","openssl::ssl::error::OpensslError","The library reporting the error",10],[11,"function","","The function reporting the error",10],[11,"reason","","The reason for the error",10],[10,"get","openssl::ssl::error","Creates a new `OpenSslErrors` with the current contents of the error\nstack.",9],[4,"VerifyCallback","openssl::ssl","The signature of functions that can be used to manually verify certificates"],[10,"try_new","","Attempts to create a new SSL context.",0],[10,"new","","A convenience wrapper around `try_new`.",0],[10,"set_verify","","Configures the certificate verification method for new connections.",0],[10,"set_CA_file","","Specifies the file that contains trusted CA certificates.",0],[10,"get_error","","",1],[10,"get_current_cert","","",1],[10,"subject_name","","",2],[10,"try_new","","Attempts to create a new SSL stream",4],[10,"new","","A convenience wrapper around `try_new`.",4],[0,"crypto","openssl",""],[0,"hash","openssl::crypto",""],[1,"Hasher","openssl::crypto::hash",""],[11,"evp","","",11],[11,"ctx","","",11],[11,"len","","",11],[2,"HashType","",""],[12,"MD5","","",12],[12,"SHA1","","",12],[12,"SHA224","","",12],[12,"SHA256","","",12],[12,"SHA384","","",12],[12,"SHA512","","",12],[3,"evpmd","",""],[3,"hash","","Hashes the supplied input data using hash t, returning the resulting hash\nvalue"],[4,"EVP_MD_CTX","",""],[4,"EVP_MD","",""],[10,"new","","",11],[10,"update","","Update this hasher with more input bytes",11],[10,"final","","Return the digest of all bytes added to this hasher since its last\ninitialization",11],[0,"hmac","openssl::crypto",""],[1,"HMAC_CTX","openssl::crypto::hmac",""],[11,"md","","",13],[11,"md_ctx","","",13],[11,"i_ctx","","",13],[11,"o_ctx","","",13],[11,"key_length","","",13],[11,"key","","",13],[1,"HMAC","",""],[11,"ctx","","",14],[11,"len","","",14],[3,"HMAC","",""],[10,"update","","",14],[10,"final","","",14],[0,"pkcs5","openssl::crypto",""],[3,"pbkdf2_hmac_sha1","openssl::crypto::pkcs5","Derives a key from a password and salt using the PBKDF2-HMAC-SHA1 algorithm."],[0,"pkey","openssl::crypto",""],[1,"PKey","openssl::crypto::pkey",""],[11,"evp","","",15],[11,"parts","","",15],[2,"Role","","Represents a role an asymmetric key might be appropriate for."],[12,"Encrypt","","",16],[12,"Decrypt","","",16],[12,"Sign","","",16],[12,"Verify","","",16],[2,"EncryptionPadding","","Type of encryption padding to use."],[12,"OAEP","","",17],[12,"PKCS1v15","","",17],[4,"EVP_PKEY","",""],[4,"RSA","",""],[10,"new","","",15],[10,"gen","","",15],[10,"save_pub","","Returns a serialized form of the public key, suitable for load_pub().",15],[10,"load_pub","","Loads a serialized form of the public key, as produced by save_pub().",15],[10,"save_priv","","Returns a serialized form of the public and private keys, suitable for\nload_priv().",15],[10,"load_priv","","Loads a serialized form of the public and private keys, as produced by\nsave_priv().",15],[10,"size","","Returns the size of the public key modulus.",15],[10,"can","","Returns whether this pkey object can perform the specified role.",15],[10,"max_data","","Returns the maximum amount of data that can be encrypted by an encrypt()\ncall.",15],[10,"encrypt_with_padding","","",15],[10,"decrypt_with_padding","","",15],[10,"encrypt","","Encrypts data using OAEP padding, returning the encrypted data. The\nsupplied data must not be larger than max_data().",15],[10,"decrypt","","Decrypts data, expecting OAEP padding, returning the decrypted data.",15],[10,"sign","","Signs data, using OpenSSL's default scheme and sha256. Unlike encrypt(),\ncan process an arbitrary amount of data; returns the signature.",15],[10,"verify","","Verifies a signature s (using OpenSSL's default scheme and sha256) on a\nmessage m. Returns true if the signature is valid, and false otherwise.",15],[10,"sign_with_hash","","",15],[10,"verify_with_hash","","",15],[0,"rand","openssl::crypto",""],[3,"rand_bytes","openssl::crypto::rand",""],[0,"symm","openssl::crypto",""],[1,"Crypter","openssl::crypto::symm","Represents a symmetric cipher context."],[11,"evp","","",18],[11,"ctx","","",18],[11,"keylen","","",18],[11,"blocksize","","",18],[2,"Mode","",""],[12,"Encrypt","","",19],[12,"Decrypt","","",19],[2,"Type","",""],[12,"AES_128_ECB","","",20],[12,"AES_128_CBC","","",20],[12,"AES_256_ECB","","",20],[12,"AES_256_CBC","","",20],[12,"RC4_128","","",20],[3,"encrypt","","Encrypts data, using the specified crypter type in encrypt mode with the\nspecified key and iv; returns the resulting (encrypted) data."],[3,"decrypt","","Decrypts data, using the specified crypter type in decrypt mode with the\nspecified key and iv; returns the resulting (decrypted) data."],[4,"EVP_CIPHER_CTX","",""],[4,"EVP_CIPHER","",""],[10,"new","","",18],[10,"pad","","Enables or disables padding. If padding is disabled, total amount of\ndata encrypted must be a multiple of block size.",18],[10,"init","","Initializes this crypter.",18],[10,"update","","Update this crypter with more data to encrypt or decrypt. Returns\nencrypted or decrypted bytes.",18],[10,"final","","Finish crypting. Returns the remaining partial block of output, if any.",18]],"paths":[[1,"SslContext"],[1,"X509StoreContext"],[1,"X509"],[1,"X509Name"],[1,"SslStream"],[2,"SslMethod"],[2,"SslVerifyMode"],[2,"X509NameFormat"],[2,"X509ValidationError"],[2,"SslError"],[2,"OpensslError"],[1,"Hasher"],[2,"HashType"],[1,"HMAC_CTX"],[1,"HMAC"],[1,"PKey"],[2,"Role"],[2,"EncryptionPadding"],[1,"Crypter"],[2,"Mode"],[2,"Type"]]};
initSearch(searchIndex);
