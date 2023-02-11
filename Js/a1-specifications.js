var specs = {
Printer_Properties: {
spec_1: {
title: "Technoogy",
description: ["Fused Filament Fabrication"]
},
spec_2: {
title: "Architecture",
description: ["CoreXY Duel Belt"]
},
spec_3: {
title: "Print Volume",
description: ["300mm x 250mm x 250mm"]
},
spec_4: {
title: "Extruder",
description: ["1-E3D Titan"]
},
spec_5: {
title: "Mother Board",
description: [
  "STM32"
]
},
spec_6: {
title: "Firmwere",
description: ["Kreator Marlin"]
},
spec_7: {
title: "Operating Sound",
description: ["50 dB"]
},
spec_8: {
title: "Connectivity",
description: ["USB , WiFi(KreatorCloud)"],

},
spec_9: {
title: "Electrical Input",
description: ["240V AC (50HZ)"],

},
spec_10: {
title: "Electrical Output",
description: ["12V DC 29A"],

},
spec_11: {
title: "Supported File",
description: ["gcode"],

}
},
Printing_Properties: {
spec_1: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_2: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_3: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_4: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_5: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_6: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_7: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_8: {
title: "Kreator 3D",
description: ["Kreator 3D"]
}
},
Physical_Dimension: {
spec_1: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_2: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_3: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_4: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_5: {
title: "Kreator 3D",
description: ["Kreator 3D"]
}
},
Software: {
spec_1: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_2: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_3: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_4: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_5: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_6: {
title: "Kreator 3D",
description: ["Kreator 3D"]
},
spec_7: {
title: "Kreator 3D",
description: ["Kreator 3D"]
}
}
};
function showSpecs(spec_name) {
document.getElementById(
"spec-category-title"
).innerHTML = spec_name.replace(/_/g, " ");
//Append Specs
var markup_title =
"<div class='title os-regular'>" +
spec_name.replace(/_/g, " ") +
"</div>";
var spec_container_markup = Object.keys(specs[spec_name])
.map(item => {
var spec_title = specs[spec_name][item]["title"];
var spec_description = specs[spec_name][item]["description"]
  .map(item => {
    return "<p class='os_thin'>" + item + "</p>";
  })
  .join("");
var markup =
  "<div class='spec'><h3 class='os-regular'>" +
  spec_title +
  "</h3>" +
  spec_description +
  "</div>";
return markup;
})
.join("");
document.getElementById(
"spec-container"
).innerHTML = spec_container_markup;
}

$(document).on("click", ".specs-nav-item", function() {
$(".specs-nav-item.active").removeClass("active");
$(this).addClass("active");
});
showSpecs("Printer_Properties");