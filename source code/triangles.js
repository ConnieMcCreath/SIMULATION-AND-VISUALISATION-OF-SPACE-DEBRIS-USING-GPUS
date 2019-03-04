	var px2 = 0;
	var py2 = -420;
	var pz3 = 0;

	var vx2 = -240;
	var vy2 = 0;
	var vz2 = 0;

	var acc_x2 = 0;
	var acc_y2 = 0;
	var acc_z2 = 0;

	function updateUnitVector2(){

		r_x2 = 0 - px2;
		r_y2 = 0 - py2;
		r_z2 = 0 - pz2;

		r2 = Math.sqrt(px2*px2+py2*py2+pz2*pz2);

	}

	function updateForce2(){
		var force2 = gravity*mass_earth/(r2*r2);
	}
	function updateAcceleration2(){
		acc_x2 = (r_x2/r2)*force2;
		acc_y2 = (r_y2/r2)*force2;
		acc_z2 = (r_z2/r2)*force2;
	}
	function updateVelocity2(){

		vx2 += acc_x2 * dt;
		vy2 += acc_y2 * dt;
		vz2 += acc_z2 * dt;
	}
	function updatePosition2(){

		px2 += vx2 * dt;
		py2 += vy2 * dt;
		pz2 += vz2 * dt;
	}
