<template>
  <nav class=" nav justify-content-center bg-light">
    <a class="navbar-brand text-secondary">
        <router-link to="/ยื่นคำร้อง">ยื่นคำร้อง</router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand text-secondary">
        <router-link to="/ยกเลิกคำร้อง">ยกเลิกคำร้อง</router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand text-secondary">
        <router-link to="/ติดตาม">ติดตามคำร้อง</router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand text-secondary" href="#">คู่มือขอเอกสาร</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <logo></logo>

  <h5>6409650808</h5>
  <h5>นาย จุด จุดจุด</h5>
  <div class="line"></div>
<p></p>
<div class="card" style="width: 30rem;">
 
    <div class="sidenav">
    <div class="row">
    <a class="navbar-brand" href="#">ออกจากระบบ</a>
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ประวัตินักศึกษา</a>
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ผลการขอโควต้า</a>
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ค้นหารายวิชา</a>
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ขอใบรับรองออนไลน์</a>
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ผลการจดทะเบียน</a>
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ตารางเรียน/สอบ</a> 
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ภาระค่าใช้จ่าย/ทุน</a>
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ผลการศึกษา</a>  
  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ตรวจสอบจบ</a>

  </div>
  <div class="row">
    <a class="navbar-brand" href="#">ประเมิณผู้สอน</a>
  </div>
</div>

</div>

  <router-view/>
  
</template>
<script>

export default {
    name:'NavBar',
    components:{
    },
}
</script>

<style>
.nav{
  font-size: 1.2rem;
  padding: 40px;
}
h5{
  margin-right:55.5em;
}
.line{
   margin-left: 20px;
    height: 1px;
    width:400px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
.row{
  padding-bottom: 30px;
  

}
.sidenav{
  padding: 1em 90em 0px 0em;
  margin: 10px 0px 0px 5em;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  position: static;
  
}






.nav a.router-link-exact-active {
  color: #42b983;
}
</style>