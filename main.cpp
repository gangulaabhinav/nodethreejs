#include <napi.h>

Napi::String Hello(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    return Napi::String::New(env, "Hello from Node.js C++ Addon");
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
    exports.Set("Hello",
        Napi::Function::New(env, Hello));
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll)