import { NativeModules } from "react-native";

var RNImmediatePhoneCall = {
  immediatePhoneCall: function (number) {
    NativeModules.RNImmediatePhoneCall.immediatePhoneCall(number);
  },
  immediateEndCall: function () {
    NativeModules.RNImmediatePhoneCall.immediateEndCall();
  },
};

export default RNImmediatePhoneCall;
