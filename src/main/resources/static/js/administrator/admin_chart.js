{
  const ctx = document.getElementById("visitChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "2023.11",
        "2023.12",
        "2024.01",
        "2024.02",
        "2024.03",
        "2024.04",
      ], //날짜
      datasets: [
        {
          label: "# of Votes",
          data: [100, 78, 90, 120, 115, 90], //그 날에 출석 수
          borderWidth: 1,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

{
  // 사이드바 열고 닫기 이벤트
  let $sidebarCloseBtn = document.querySelector(".main__sidebar--close-btn");
  let $sidebarDetail = document.querySelector(".main__sidebar-conten-detail");

  // console.log($sidebarCloseBtn);
  // console.log($sidebarDetail);
  $sidebarCloseBtn.addEventListener("click", function () {
    if ($sidebarDetail.classList.contains("sidebar-none")) {
      $sidebarDetail.classList.remove("sidebar-none");
      this.src = "/imgs/administrator/fragment/left_arrow.png";
    } else {
      $sidebarDetail.classList.add("sidebar-none");
      this.src = "/imgs/administrator/fragment/right_arrow.png";
    }
  });
}

{
  // let $chartTermbtn = document.querySelectorAll('..main__chart-search-date > div');
  let $chartTermRadio = document.querySelectorAll(
    ".main__chart-search-date > div > label > input"
  );

  $chartTermRadio.forEach((ele) => {
    ele.addEventListener("change", function () {
      $chartTermRadio.forEach((e) => {
        e.closest(".main__chart-search-date > div").style.border =
          "1px solid rgb(143, 141, 141)";
      });

      ele.closest(".main__chart-search-date > div").style.border =
        "1px solid #2bc1bf";
    });
  });
}