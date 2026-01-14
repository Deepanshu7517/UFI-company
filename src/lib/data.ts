export const pageTitle = [
  {
    page: "/",
    title: "main menu",
  },
  {
    page: "/report",
    title: "report",
  },
  {
    page: "/rejection",
    title: "rejection",
  },
  {
    page: "/fg-printing",
    title: "fg printing",
  },
  {
    page: "/release-qty",
    title: "release qty",
  },
  {
    page: "/add-child-stock",
    title: "add child stock",
  },
  {
    page: "/station-master",
    title: "station master",
  },
  {
    page: "/group-master",
    title: "group master",
  },
  {
    page: "/user-master",
    title: "user master",
  },
  {
    page: "/mapping-master",
    title: "mapping master",
  },
  {
    page: "/mapping-master",
    title: "mapping master",
  },
  {
    page: "/part-master",
    title: "part master",
  },
  {
    page: "/bom-alert-master",
    title: "alert master",
  },
];
export const traceabilityReport = [
  {
    srNo: 4798,
    model: "31401181225A",
    variant: "D22",
    customerPartNo: "1W.65.180.22",
    housingQrCode: "0303DBH00081N",

    processes: {
      cup12GluingPressing: {
        dateTime: "18-12-2025 01:16:03",
        bop: "5461354BOP-4000048",
        airPressure: { min: 1.5, max: 2.5, actual: 2.34 },
        interferenceLoad: { min: 1200, max: 2000, actual: 1559 },
        gluingConfirmation: "OK",
        result: "PASS",
      },

      cup26GluingPressing: {
        dateTime: "18-12-2025 01:16:38",
        bop: "1234567BOP-9000384",
        airPressure: { min: 2, max: 4, actual: 3.65 },
        interferenceLoad: { min: 200, max: 1000, actual: 934 },
        gluingConfirmation: "OK",
        result: "PASS",
      },

      dowelPressing: {
        dateTime: "18-12-2025 14:16:55",
        bop: "2046794BOP-9000327",
        airPressure: { min: 2, max: 4, actual: 2.78 },
        interferenceLoad: { min: 1500, max: 2200, actual: 1644 },
        result: "PASS",
      },

      antiDrainPressing: {
        dateTime: "18-12-2025 14:17:37",
        airPressure: { min: 1.2, max: 1.6, actual: 1.38 },
        interferenceLoad: { min: 200, max: 350, actual: 233 },
        result: "PASS",
      },

      oringAndElementAssembly: {
        dateTime: "18-12-2025 14:18:15",
        bigCapBop: "5000029",
        elementBop: "7894568SUB-0000061",
        airPressure: { min: 4, max: 6, actual: 5.23 },
        presenceChecks: {
          capOring: true,
          elementOring1: true,
          elementOring2: true,
          bypassValve: true,
        },
        oilingConfirmed: true,
        tighteningTorque: { min: 25, max: 30, actual: 26.8 },
        result: "PASS",
      },

      gasketInstallation: {
        dateTime: "18-12-2025 14:20:24",
        gasketBops: [
          "2000539BOP-1000097",
          "2004032BOP-1000099",
          "2012861BOP-1000101",
          "2042576BOP-1000098",
        ],
        coolerBop: "7894568BOP-9000368",
        airPressure: { min: 4, max: 6, actual: 5.02 },
        cameraStatus: "OK",
        result: "PASS",
      },

      screwFeeding: {
        dateTime: "18-12-2025 14:22:16",
        airPressure: { min: 4, max: 6, actual: 5 },
        screwCount: 6,
        result: "PASS",
      },

      finalTightening: {
        dateTime: "18-12-2025 14:24:43",
        airPressure: { min: 4, max: 6, actual: 5.07 },
        torque: [18.1, 18.4, 18.3, 18.4, 18.4, 18.6],
        result: "PASS",
      },

      leakTesting: {
        antiDrain: {
          dateTime: "18-12-2025 14:26:08",
          testPressure: { min: 0.5, max: 0.7, actual: 0.58 },
          leakFlowRate: { min: 0, max: 0.5, actual: 0 },
          result: "PASS",
        },
        dryLeak: {
          dateTime: "18-12-2025 14:36:22",
          waterPressure: 208.1,
          waterLeakage: 0.402,
          servicePressure: 54.63,
          serviceLeakage: 0.103,
          oilPressure: 525.5,
          chamberPressure: -1.77,
          oilLeakage: 0.178,
          serviceFlow: 1.35,
          laserCode: "314013522514:36:18",
          result: "PASS",
        },
      },

      finalInspection: {
        dateTime: "18-12-2025 14:40:31",
        final2DCode: "546:0303DBH00081N:DU042MN:181225:02:0792750",
        status: "VERIFIED",
      },
    },
  },
];
