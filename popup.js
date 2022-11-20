document.getElementById("add-classroom").addEventListener("click", function () {
  document.getElementById("add-classroom-form").style.display = "block";
  document.getElementById("add-classroom").style.display = "none";
  document.getElementById("classroom-list").style.display = "none";
});
document.getElementById("cancel").addEventListener("click", function () {
  document.getElementById("add-classroom-form").style.display = "none";
  document.getElementById("add-classroom").style.display = "block";
  document.getElementById("classroom-list").style.display = "block";
});
function createId() {
  return Math.floor(Math.random() * 100000000);
}
document
  .getElementById("add-classroom-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    var classroom = document.getElementById("classroomName").value;
    var classroomURL = document.getElementById("classroomURL").value;
    var classroomTeacher = document.getElementById("classroomTeacher").value;
    var classroomList = document.getElementById("classroom-list");
    var classroomId = createId();
    //check if all fields are filled
    if (classroom == "" || classroomURL == "" || classroomTeacher == "") {
      alert("Please fill in all fields");
    } else {
      const newClassroom = `
    <div class="card" id="classroom${classroomId}">
                <div class="card-body">
                  <h5 class="card-title">${classroom}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${classroomTeacher}</h6>
                  <button type="button" class="btn btn-danger" id="delete-classroom${classroomId}">Delete</button>
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                        id="edit-classroombtn${classroomId}"
                    >
                      Customize Classroom
                    </button>
                    <ul class="dropdown-menu" id="classroomMenu${classroomId}">
                      <li>
                        <div class="" 
                          ><label for="edit-classroomName${classroomId}">Edited Classroom Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="edit-classroomName${classroomId}"
                        /></div>
                      </li>
                      <li>
                        <div class="" 
                          ><label for="edit-classroomImage${classroomId}">Custom Classroom Image</label>
                          <input
                            type="text"
                            name="classroomImage"
                            placeholder="Classroom Header Image"
                            class="form-control"
                            id="edit-classroomImage${classroomId}"
                        /></div>
                      </li>
                      <li>
                      <div class="" 
                        ><label for="edit-themeBackgroundColor${classroom.id
        }" >theme Background Color</label>
                        <input
                          type="color"
                          class="form-control"
                          id="edit-themeBackgroundColor${classroom.id}"
                          value="${classroom.themeBackgroundColor
          ? classroom.themeBackgroundColor
          : ""
        }"
                      /></div>
                    </li>
                    <li>
                      <div class="" 
                        ><label for="edit-backgroundColor${classroom.id
        }" >Background Color</label>
                        <input
                          type="color"
                          class="form-control"
                          id="edit-backgroundColor${classroom.id}"
                          value="${classroom.backgroundColor
          ? classroom.backgroundColor
          : ""
        }"
                      /></div>
                    </li>
                    <li>
                    <div class="" 
                      ><label for="edit-themeTextColor${classroom.id
        }" >theme Text Color</label>
                      <input
                        type="color"
                        class="form-control"
                        id="edit-themeTextColor${classroom.id}"
                        value="${classroom.themeTextColor ? classroom.themeTextColor : ""
        }"
                    /></div>
                  </li>
                        <li>
                            <div class="" 
                            >
                            <button
                            type="button"
                            class="btn btn-primary"
                            id="edit-classroomSave${classroomId}"
                            >Save Changes</button>
                            </div>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>`;
      classroomList.innerHTML += newClassroom;
      document.getElementById("add-classroom-form").style.display = "none";
      document.getElementById("add-classroom").style.display = "block";
      document.getElementById("classroom-list").style.display = "block";
      var classrooms = [];
      chrome.storage.local.get("classrooms", function (data) {
        console.log(data);
        classrooms = data.classrooms;
        if (classrooms == null) {
          classrooms = [];
        }
        classrooms.push({
          id: classroomId,
          name: classroom,
          url: classroomURL,
          teacher: classroomTeacher,
          header_Image: "",
          editedName: "",
        });
        chrome.storage.local.set({ classrooms: classrooms }, function () {
          console.log("Classroom added");
        });
        document.getElementById("classroomName").value = "";
        document.getElementById("classroomURL").value = "";
        document.getElementById("classroomTeacher").value = "";
      });
    }
  });

//load classrooms from local storage
function loadClassrooms() {
  var classrooms = [];
  chrome.storage.local.get("classrooms", function (data) {
    classrooms = data.classrooms;
    if (classrooms == null) {
      classrooms = [];
    } else {
      var classroomList = document.getElementById("classroom-list");
      classrooms.forEach(function (classroom) {
        const newClassroom = `
            <div class="card" id="classroom${classroom.id}">
                        <div class="card-body">
                          <h5 class="card-title">${classroom.name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">${classroom.teacher
          }</h6>
                          <button type="button" class="btn btn-danger" id="delete-classroom${classroom.id
          }">Delete</button>
                          <div class="dropdown">
                            <button
                              class="btn btn-primary dropdown-toggle"
                              type="button"
                              aria-expanded="false"
                                id="edit-classroombtn${classroom.id}"
                            >
                                Customize Classroom
                            </button>
                            <ul class="dropdown-menu" id="classroomMenu${classroom.id
          }">
                              <li>
                                <div class="" 
                                  ><label for="edit-classroomName${classroom.id
          }" >Edited Classroom Name</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="edit-classroomName${classroom.id}"
                                    value="${classroom.editedName
            ? classroom.editedName
            : classroom.name
          }"
                                /></div>
                              </li>
                              <li>
                                <div class="" 
                                  ><label for="edit-themeBackgroundColor${classroom.id
          }" >theme Background Color</label>
                                  <input
                                    type="color"
                                    class="form-control"
                                    id="edit-themeBackgroundColor${classroom.id}"
                                    value="${classroom.themeBackgroundColor
            ? classroom.themeBackgroundColor
            : "#fff"
          }"
                                /></div>
                              </li>
                              <li>
                              <div class="" 
                                ><label for="edit-themeTextColor${classroom.id
          }" >theme Text Color</label>
                                <input
                                  type="color"
                                  class="form-control"
                                  id="edit-themeTextColor${classroom.id}"
                                  value="${classroom.themeTextColor
            ? classroom.themeTextColor
            : ""
          }"
                              /></div>
                            </li>
                            <li>
                            <div class="" 
                              ><label for="edit-backgroundColor${classroom.id
          }" >Background Color</label>
                              <input
                                type="color"
                                class="form-control"
                                id="edit-backgroundColor${classroom.id}"
                                value="${classroom.backgroundColor
            ? classroom.backgroundColor
            : ""
          }"
                            /></div>
                          </li>
                              <li>
                                <div class="" ><label for="edit-classroomImage${classroom.id
          }">Custom Classroom Image</label>
                                  <input
                                    type="text"
                                    id="edit-classroomImage${classroom.id}"
                                    class="form-control"
                                    value="${classroom.header_Image
            ? classroom.header_Image
            : "Classroom Header Image"
          }"
                                </a>
                              </li>
                              <li>
                              <div class="" 
                              >
                              <button
                              type="button"
                              class="btn btn-primary"
                              id="edit-classroomSave${classroom.id}"
                              >Save Changes</button>
                              </div>
                          </li>
                            </ul>
                          </div>
                        </div>
                      </div>`;
        classroomList.innerHTML += newClassroom;
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadClassrooms();
  // custom classroom
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id.includes("edit-classroombtn")) {
      var classroomId = e.target.id.split("edit-classroombtn")[1];
      document
        .getElementById("classroomMenu" + classroomId)
        .classList.toggle("show");
    }
    if (e.target && e.target.id.includes("delete-classroom")) {
      var classroomId = e.target.id.split("delete-classroom")[1];
      var classrooms = [];
      chrome.storage.local.get("classrooms", function (data) {
        classrooms = data.classrooms;
        if (classrooms == null) {
          classrooms = [];
        } else {
          classrooms = classrooms.filter((classroom) => {
            return classroom.id != classroomId;
          });
          chrome.storage.local.set({ classrooms: classrooms }, function () {
            console.log("Classroom deleted");
          });
          document.getElementById("classroom" + classroomId).remove();
        }
      });
    }
    if (e.target && e.target.id.includes("edit-classroomSave")) {
      var classroomId = e.target.id.split("edit-classroomSave")[1];
      var classroomName = document.getElementById(
        "edit-classroomName" + classroomId
      ).value;
      var classroomImage = document.getElementById(
        "edit-classroomImage" + classroomId
      ).value;
      var themeBackgroundColor = document.getElementById(
        "edit-themeBackgroundColor" + classroomId
      ).value;
      var themeTextColor = document.getElementById(
        "edit-themeTextColor" + classroomId
      ).value;
      var backgroundColor = document.getElementById(
        "edit-backgroundColor" + classroomId
      ).value;

      var classrooms = [];
      chrome.storage.local.get("classrooms", function (data) {
        classrooms = data.classrooms;
        if (classrooms == null) {
          classrooms = [];
        } else {
          classrooms.forEach(function (classroom) {
            if (classroom.id == classroomId) {
              console.log(classroom);
              if (classroomName != "") {
                classroom.editedName = classroomName;
              }
              if (classroomImage != "") {
                classroom.header_Image = classroomImage;
              }
              if (themeBackgroundColor != "") {
                classroom.themeBackgroundColor = themeBackgroundColor;
              }
              if (themeTextColor != "") {
                classroom.themeTextColor = themeTextColor;
              }
              if (backgroundColor != "") {
                classroom.backgroundColor = backgroundColor;
              }
            }
          });
          chrome.storage.local.set({ classrooms: classrooms }, function () {
            console.log(classrooms);
          });
        }
      });
    }
  });
});

